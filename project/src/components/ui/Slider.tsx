import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  formatter?: (value: number) => string;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  label,
  formatter = (val) => val.toString(),
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  
  const percentage = ((value - min) / (max - min)) * 100;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    const hoverVal = min + position * (max - min);
    setHoverValue(Math.round(hoverVal / step) * step);
  };
  
  const handleMouseLeave = () => {
    setHoverValue(null);
  };
  
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">{label}</label>
          <span className="text-sm font-medium text-gray-900">
            {formatter(hoverValue !== null ? hoverValue : value)}
          </span>
        </div>
      )}
      
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="absolute h-2 bg-green-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="absolute top-0 h-2 w-full opacity-0 cursor-pointer"
        />
        
        <div
          className="absolute h-4 w-4 bg-white border-2 border-green-500 rounded-full shadow -mt-1"
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>{formatter(min)}</span>
        <span>{formatter(max)}</span>
      </div>
    </div>
  );
};

export default Slider;