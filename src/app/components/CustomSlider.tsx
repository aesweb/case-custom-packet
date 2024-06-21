'use client';

import { Slider } from '@nextui-org/react';
import { usePackage } from '../context/PackageContext';

interface CustomSliderProps {
  label: string;
  maxValue: number;
  marks: { value: number; label: string }[];
}

export default function CustomSlider({
  label,
  maxValue,
  marks,
}: CustomSliderProps) {
  const { selectedProducts, setSelectedProducts } = usePackage();

  const handleChange = (value: number | number[]) => {
    if (typeof value === 'number') {
      setSelectedProducts((prev) => ({ ...prev, [label]: value }));
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
      defaultValue={0}
      className="max-w-md"
      onChange={handleChange}
      value={selectedProducts[label] || 0}
    />
  );
}
