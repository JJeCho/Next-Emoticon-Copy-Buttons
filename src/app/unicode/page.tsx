// src/pages/unicode/UnicodePage.tsx

"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import ClipboardButton from "../../components/ClipboardButton";
import { generateUnicodeCharacters, Emoji } from "../../data/unicodeGenerator";
import { UNICODE_CATEGORIES } from "../../data/emojiRanges";

interface CategoryCache {
  characters: Emoji[];
  currentState: { rangeIndex: number; offset: number };
  hasMore: boolean;
}

export default function UnicodePage() {
  const CHUNK_SIZE = 100; 
  
  const [selectedCategory, setSelectedCategory] = useState<
    keyof typeof UNICODE_CATEGORIES
  >("emoji");
  const [characters, setCharacters] = useState<Emoji[]>([]);
  const [currentState, setCurrentState] = useState<{
    rangeIndex: number;
    offset: number;
  }>({
    rangeIndex: 0,
    offset: 0,
  });
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cache, setCache] = useState<{ [key: string]: CategoryCache }>({});

  const resetCharacters = useCallback(() => {
    setCharacters([]);
    setCurrentState({ rangeIndex: 0, offset: 0 });
    setHasMore(true);
    setError(null);
  }, []);

  const loadMoreCharacters = useCallback(() => {
    if (!hasMore || isLoading) return;

    console.log(`Loading more characters for category: ${selectedCategory}`);
    setIsLoading(true);
    setError(null);

    try {
      const ranges = UNICODE_CATEGORIES[selectedCategory];
      const { characters: newChars, nextState } = generateUnicodeCharacters(
        ranges,
        CHUNK_SIZE,
        currentState
      );

      console.log(`Loaded ${newChars.length} characters.`);
      console.log("Next State:", nextState);

      setCharacters((prevChars) => {
        const updatedChars = [...prevChars, ...newChars];
        setCache((prevCache) => ({
          ...prevCache,
          [selectedCategory]: {
            characters: updatedChars,
            currentState: nextState,
            hasMore: nextState.rangeIndex < ranges.length,
          },
        }));
        return updatedChars;
      });

      setCurrentState(nextState);
      setHasMore(nextState.rangeIndex < ranges.length);
    } catch (err) {
      console.error("Error loading characters:", err);
      setError("Failed to load characters. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [hasMore, isLoading, selectedCategory, currentState]);

  useEffect(() => {
    if (cache[selectedCategory]) {
      const {
        characters: cachedChars,
        currentState: cachedState,
        hasMore: cachedHasMore,
      } = cache[selectedCategory];
      console.log(`Loading cached characters for category: ${selectedCategory}`);
      setCharacters(cachedChars);
      setCurrentState(cachedState);
      setHasMore(cachedHasMore);
    } else {
      resetCharacters();
      loadMoreCharacters();
    }
  }, [selectedCategory, cache, resetCharacters, loadMoreCharacters]);

  const categoryOptions = useMemo(
    () =>
      Object.keys(UNICODE_CATEGORIES).map((categoryKey) => (
        <option key={categoryKey} value={categoryKey}>
          {categoryKey
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </option>
      )),
    []
  );

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Unicode Emojis & Symbols</h1>

      <div className="mb-4">
        <label
          htmlFor="unicode-category"
          className="block mb-2 text-lg font-medium"
        >
          Select Unicode Category:
        </label>
        <select
          id="unicode-category"
          className="px-4 py-2 border rounded-md"
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(
              e.target.value as keyof typeof UNICODE_CATEGORIES
            )
          }
        >
          {categoryOptions}
        </select>
      </div>

      {error && (
        <div className="mb-4 text-red-500">
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {characters.map((item) => (
          <ClipboardButton
            key={item.char}
            label={item.char}
            copyText={item.char}
          />
        ))}
      </div>

      {isLoading && (
        <div className="mt-4 flex justify-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        </div>
      )}

      {!isLoading && hasMore && (
        <button
          onClick={loadMoreCharacters}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
}
