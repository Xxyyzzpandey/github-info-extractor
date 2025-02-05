"use client";

import React, { useEffect, useState } from "react";

const numStars = 150; // Number of stars

const StarryBackground = () => {
  const [stars, setStars] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate stars randomly across the screen
    const generateStars = () =>
      Array.from({ length: numStars }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));

    setStars(generateStars());

    const handleResize = () => setStars(generateStars());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3}px`, // Random size (1px - 3px)
            height: `${Math.random() * 3}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: Math.random(), // Random opacity for depth effect
          }}
        />
      ))}

      {/* Input & Button at the Center */}
      <div className="relative z-10 bg-opacity-80 p-6 rounded-lg flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Enter your text..."
          className="w-64 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-64 p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StarryBackground;
