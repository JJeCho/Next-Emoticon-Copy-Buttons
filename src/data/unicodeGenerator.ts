export interface UnicodeRange {
  start: number;
  end: number;
}

export interface Emoji {
  char: string;
  name?: string;
}

/**
 * Generates a chunk of Unicode characters based on the provided ranges and current state.
 * @param ranges Array of Unicode ranges to generate characters from.
 * @param chunkSize Number of characters to generate in this chunk.
 * @param currentState Current state containing rangeIndex and offset.
 * @returns An object containing the new characters and the updated state.
 */
export function generateUnicodeCharacters(
  ranges: UnicodeRange[],
  chunkSize: number,
  currentState: { rangeIndex: number; offset: number }
): { characters: Emoji[]; nextState: { rangeIndex: number; offset: number } } {
  let { rangeIndex, offset } = currentState;
  const characters: Emoji[] = [];
  let remaining = chunkSize;

  while (remaining > 0 && rangeIndex < ranges.length) {
    const range = ranges[rangeIndex];
    const start = range.start + offset;
    const end = range.end;

    const available = end - start + 1;
    const toLoad = Math.min(available, remaining);

    for (let codePoint = start; codePoint < start + toLoad; codePoint++) {
      try {
        const char = String.fromCodePoint(codePoint);
        characters.push({ char });
      } catch (e) {
        console.warn(`Invalid code point: ${codePoint}`, e);
      }
    }

    remaining -= toLoad;

    if (toLoad < available) {
      offset += toLoad;
      break; 
    } else {
      rangeIndex++;
      offset = 0;
    }
  }

  return {
    characters,
    nextState: {
      rangeIndex,
      offset,
    },
  };
}
