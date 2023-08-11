import React, { useEffect, useState } from "react";

export default function TypingText({ text }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevDisplayText => prevDisplayText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the interval for typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <p>{displayText}</p>;
}

