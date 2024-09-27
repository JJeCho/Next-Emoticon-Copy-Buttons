"use client";
import { FC } from "react";

interface ClipboardButtonProps {
  label: string; 
  copyText: string;
}

const ClipboardButton: FC<ClipboardButtonProps> = ({ label, copyText }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      alert(`Copied: ${copyText}`);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default ClipboardButton;
