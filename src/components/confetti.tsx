"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const ConfettiPiece = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute w-2 h-4"
    style={style}
  />
);

const Confetti = () => {
  const [pieces, setPieces] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: 150 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animation: `fall ${3 + Math.random() * 4}s ${Math.random() * 2}s linear infinite`,
      backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
      transform: `rotate(${Math.random() * 360}deg)`,
      opacity: Math.random() + 0.2,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      <style>
        {`
          @keyframes fall {
            0% { top: -10%; opacity: 1; }
            100% { top: 110%; opacity: 0.5; }
          }
        `}
      </style>
      {pieces.map((style, index) => (
        <ConfettiPiece key={index} style={style} />
      ))}
    </div>
  );
};

export default Confetti;
