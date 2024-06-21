'use client';

import { usePackage } from '@/app/context/PackageContext';
import CustomSlider from '../CustomSlider';

export default function BeijePedSliders() {
  const { tabProducts, setTabProducts } = usePackage();

  const handleSliderChange = (label: string, value: number) => {
    setTabProducts((prev) => ({
      ...prev,
      'beije Ped': prev['beije Ped'].some((p) => p.name === label)
        ? prev['beije Ped'].map((p) =>
            p.name === label ? { ...p, count: value } : p
          )
        : [...prev['beije Ped'], { name: label, count: value }],
    }));
  };

  const marks = [
    { value: 0, label: '0' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
    { value: 60, label: '60' },
  ];

  return (
    <div className="h-64 flex flex-col gap-8">
      <CustomSlider
        label="Standart Ped"
        maxValue={60}
        marks={marks}
        onChange={(value: number) => handleSliderChange('Standart Ped', value)}
        value={
          tabProducts['beije Ped'].find((p) => p.name === 'Standart Ped')
            ?.count || 0
        }
      />
      <CustomSlider
        label="Süper Ped"
        maxValue={60}
        marks={marks}
        onChange={(value: number) => handleSliderChange('Süper Ped', value)}
        value={
          tabProducts['beije Ped'].find((p) => p.name === 'Süper Ped')?.count ||
          0
        }
      />
      <CustomSlider
        label="Süper+ Ped"
        maxValue={60}
        marks={marks}
        onChange={(value: number) => handleSliderChange('Süper+ Ped', value)}
        value={
          tabProducts['beije Ped'].find((p) => p.name === 'Süper+ Ped')
            ?.count || 0
        }
      />
    </div>
  );
}
