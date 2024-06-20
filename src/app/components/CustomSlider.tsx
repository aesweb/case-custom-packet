// CustomSlider.js
import { Slider } from '@nextui-org/react';

interface CustomSliderProps {
  label: string;
  maxValue: number;
  marks: any; // Replace 'any' with the appropriate type for marks
}

export default function CustomSlider({ label, maxValue, marks }: CustomSliderProps) {
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
    />
  );
}
