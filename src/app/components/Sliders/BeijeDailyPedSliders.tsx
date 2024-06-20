// BeijeGunlukPedSliders.js
import CustomSlider from '../CustomSlider';

export default function BeijeGunlukPedSliders() {
  const marks = [
    { value: 0, label: '0' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
    { value: 60, label: '60' },
    { value: 70, label: '70' },
    { value: 80, label: '80' },
    { value: 90, label: '90' },
    { value: 100, label: '100' },
  ];

  return (
    <div className="h-64 flex flex-col gap-8">
      <CustomSlider label="Günlük Ped" maxValue={100} marks={marks} />
      <CustomSlider label="Süper Günlük Ped" maxValue={100} marks={marks} />
    </div>
  );
}