import Card from '../components/Card';
import CustomCard from '../components/CustomCard';

export default function page() {
  return (
    <div className="gap-28 flex items-center justify-center py-20 container mx-auto max-w-6xl">
      <div className="w-1/2">
        <CustomCard />
      </div>
      <div className="w-1/2">
        <Card />
      </div>
    </div>
  );
}
