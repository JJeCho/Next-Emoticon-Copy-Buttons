"use client"
import React, { useState, useEffect } from 'react';
import styles from './Clouds.module.css';
import { emoticons } from '../data/emoticon';

const cloudImages: string[] = ['/cloud1.png', '/cloud2.png', '/cloud3.png'];

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

export default function Clouds() {
  const [clouds, setClouds] = useState<CloudData[]>([]);
  const [copiedText, setCopiedText] = useState<string>('');

  const addCloud = () => {
    const emoticon = getRandomItem(emoticons);
    const newCloud: CloudData = {
      cloudSrc: getRandomItem(cloudImages),
      top: `${Math.random() * 70 + 10}%`,
      left: `100vw`,
      animationDuration: `${10 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 10}s`,
      size: `${100 + Math.random() * 100}px`, 
      text: emoticon.text,
      label: emoticon.label,
    };
    setClouds((prevClouds) => [...prevClouds, newCloud]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addCloud();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string): void => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedText(text);
        setTimeout(() => setCopiedText(''), 2000);
      }).catch((err) => {
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
          <img
            src={cloud.cloudSrc}
            className={styles.cloud}
            alt="Cloud"
          />
          <span className={styles.copyText}>{cloud.text}</span>
        </div>
      ))}

      {copiedText && (
        <div className={styles.copyFeedback}>
          Copied `{copiedText}` to clipboard!
        </div>
      )}
    </>
  );
}
