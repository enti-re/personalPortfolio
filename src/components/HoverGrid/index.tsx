import { useState } from 'react';

export default function HoverGrid() {
  const rows = 10;
  const cols = 15;
  const totalSquares = rows * cols;
  
  const [squareColors, setSquareColors] = useState(
    Array(totalSquares).fill('bg-transparent')
  );
  
  const colors = [
    'bg-sky-200',
    'bg-sky-300',
    'bg-sky-400',
    'bg-indigo-200',
    'bg-indigo-300',
    'bg-indigo-400',
    'bg-violet-200',
    'bg-violet-300',
    'bg-violet-400',
    'bg-green-300',
    'bg-emerald-300',
    'bg-orange-300',
    'bg-amber-300',
  ];
  
  const handleHover = (index: any) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setSquareColors(prev => {
      const newColors = [...prev];
      newColors[index] = randomColor;
      return newColors;
    });
  };
  
  return (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-15">
        {Array.from({ length: totalSquares }).map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => handleHover(index)}
            className={`w-8 h-8 border-thin border-white ${squareColors[index]} transition-colors duration-200`}
          />
        ))}
      </div>
    </div>
  );
}