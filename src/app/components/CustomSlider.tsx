'use client';

import { Slider } from '@nextui-org/react';

interface CustomSliderProps {
  label: string;
  maxValue: number;
  marks: { value: number; label: string }[];
  onChange: (value: number) => void;
  value: number;
}

export default function CustomSlider({
  label,
  maxValue,
  marks,
  onChange,
  value,
}: CustomSliderProps) {
  const handleChange = (newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      onChange(newValue);
    }
  };

  return (
    <Slider
      label={label}
      showTooltip={true}
      showSteps={true}
      step={10}
      maxValue={maxValue}
      color="foreground"
      getValue={(value) => `${value}`}
      minValue={0}
      marks={marks}
      value={value}
      onChange={handleChange}
      className="max-w-md"
    />
  );
}
