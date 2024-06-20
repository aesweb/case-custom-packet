// BeijeTamponSliders.js
import CustomSlider from '../CustomSlider';

export default function BeijeTamponSliders() {
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
      <CustomSlider label="Mini Tampon" maxValue={60} marks={marks} />
      <CustomSlider label="Standart Tampon" maxValue={60} marks={marks} />
      <CustomSlider label="Süper Tampon" maxValue={60} marks={marks} />
    </div>
  );
}
