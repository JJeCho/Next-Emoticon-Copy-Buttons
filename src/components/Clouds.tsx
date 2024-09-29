"use client";
import React, { useState, useEffect } from 'react';
import styles from './Clouds.module.css';

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

interface CloudData {
  cloudSrc: string;
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  text: string;
  label: string;
}

interface KaomojiData {
  Joy: string[];
  Love: string[];
  Embarrassment: string[];
  Sympathy: string[];
  Dissatisfaction: string[];
  Anger: string[];
  Sadness: string[];
  Pain: string[];
  Fear: string[];
  Indifference: string[];
  Confusion: string[];
  Doubt: string[];
  Surprise: string[];
  Greeting: string[];
  Hugging: string[];
  Winking: string[];
  Apologizing: string[];
  Nosebleeding: string[];
  Hiding: string[];
  Writing: string[];
  Running: string[];
  Sleeping: string[];
  Cat: string[];
  Bear: string[];
  Dog: string[];
  Rabbit: string[];
  Pig: string[];
  Bird: string[];
  Fish: string[];
  Spider: string[];
  Friends: string[];
  Enemies: string[];
  Weapons: string[];
  Magic: string[];
  Food: string[];
  Music: string[];
  Games: string[];
  Faces: string[];
  Special: string[];
}

export default function Clouds() {
  const [clouds, setClouds] = useState<CloudData[]>([]);
  const [kaomojis, setKaomojis] = useState<KaomojiData | null>(null);
  const [copiedText, setCopiedText] = useState<string>('');

  const addCloud = () => {
    if (!kaomojis) {
      console.warn('Kaomojis not loaded yet.');
      return;
    }
  
    console.log(Object.keys(kaomojis));
    const category = getRandomItem(Object.keys(kaomojis));
    const emoticon = getRandomItem(kaomojis[category as keyof KaomojiData]);
  
    // Determine the cloud image and size based on the length of the emoticon
    let cloudSrc = '';
    let size = '';
  
    if (emoticon.length <= 3) {
      cloudSrc = '/cloud3.png'; // Use cloud3 for emoticons with length <= 3
      size = '50px'; // Set size for cloud3
    } else if (emoticon.length <= 5) {
      cloudSrc = '/cloud2.png'; // Use cloud2 for emoticons with length <= 5
      size = '75px'; // Set size for cloud2
    } else {
      cloudSrc = '/cloud1.png'; // Use cloud1 for emoticons with length > 5
      size = '150px'; // Set size for cloud1
    }
  
    const newCloud: CloudData = {
      cloudSrc: cloudSrc,
      top: `${Math.random() * 70 + 10}%`,
      left: `100vw`,
      animationDuration: `${10 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 10}s`,
      size: size,
      text: emoticon,
      label: emoticon,
    };
  
    setClouds((prevClouds) => [...prevClouds, newCloud]);
  };
  

  useEffect(() => {
    import('../data/kaomoji.json')
      .then((data) => {
        console.log('Loaded data:', data);
        // If data has a default export, use it
        setKaomojis(data.default || data);
      })
      .catch((error) => console.error('Failed to load emoticons', error));
  }, []);

  useEffect(() => {
    if (!kaomojis) return;

    const interval = setInterval(() => {
      addCloud();
    }, 3000);

    return () => clearInterval(interval);
  }, [kaomojis]);

  const handleCopy = (text: string): void => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedText(text);
          setTimeout(() => setCopiedText(''), 2000);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-999999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        document.execCommand('copy');
        setCopiedText(text);
        setTimeout(() => setCopiedText(''), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }

      document.body.removeChild(textarea);
    }
  };

  return (
    <>
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className={styles.cloudContainer}
          style={{
            top: cloud.top,
            left: cloud.left,
            animationDuration: cloud.animationDuration,
            width: cloud.size,
          }}
          onClick={() => handleCopy(cloud.text)}
          aria-label={`Copy ${cloud.label}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') handleCopy(cloud.text);
          }}
        >
          <img src={cloud.cloudSrc} className={styles.cloud} alt="Cloud" />
          <span className={styles.copyText}>{cloud.text}</span>
        </div>
      ))}

      {copiedText && (
        <div className={styles.copyFeedback}>Copied `{copiedText}` to clipboard!</div>
      )}
    </>
  );
}
