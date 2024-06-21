'use client';

import { usePackage } from '@/app/context/PackageContext';
import CustomSlider from '../CustomSlider';

export default function BeijeTamponSliders() {
  const { tabProducts, setTabProducts } = usePackage();

  const handleSliderChange = (label: string, value: number) => {
    setTabProducts((prev) => ({
      ...prev,
      'beije Tampon': prev['beije Tampon'].some((p) => p.name === label)
        ? prev['beije Tampon'].map((p) =>
            p.name === label ? { ...p, count: value } : p
          )
        : [...prev['beije Tampon'], { name: label, count: value }],
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
        label="Mini Tampon"
        maxValue={60}
        marks={marks}
        onChange={(value: number) => handleSliderChange('Mini Tampon', value)}
        value={
          tabProducts['beije Tampon'].find((p) => p.name === 'Mini Tampon')
            ?.count || 0
        }
      />
      <CustomSlider
        label="Standart Tampon"
        maxValue={60}
        marks={marks}
        onChange={(value: number) =>
          handleSliderChange('Standart Tampon', value)
        }
        value={
          tabProducts['beije Tampon'].find((p) => p.name === 'Standart Tampon')
            ?.count || 0
        }
      />
      <CustomSlider
        label="Süper Tampon"
        maxValue={60}
        marks={marks}
        onChange={(value: number) => handleSliderChange('Süper Tampon', value)}
        value={
          tabProducts['beije Tampon'].find((p) => p.name === 'Süper Tampon')
            ?.count || 0
        }
      />
    </div>
  );
}
