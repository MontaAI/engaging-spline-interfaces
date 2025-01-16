import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RewritingTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function RewritingText({
  words,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000
}: RewritingTextProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, deletingSpeed);
    } else {
      if (text === currentWord) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return;
      }

      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <motion.span className={className}>
      {text}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-purple-400 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  );
}
