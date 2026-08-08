import React, { useState, useEffect } from 'react';

const PHRASES = [
  "Content Writers",
  "Book Writers",
  "Story Writers"
];

export const TypewriterText: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText.length < targetPhrase.length) {
      // Typing phase
      timer = setTimeout(() => {
        setCurrentText(targetPhrase.substring(0, currentText.length + 1));
      }, 100);
    } else if (!isDeleting && currentText.length === targetPhrase.length) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting phase
      timer = setTimeout(() => {
        setCurrentText(targetPhrase.substring(0, currentText.length - 1));
      }, 50);
    } else if (isDeleting && currentText.length === 0) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <span 
      className="inline-flex items-center font-black bg-clip-text text-transparent transition-all duration-300 drop-shadow-xs"
      style={{
        backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        WebkitBackgroundClip: 'text',
      }}
    >
      {currentText}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
};
