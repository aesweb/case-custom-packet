import Card from '../../components/Card';
import CustomCard from '../../components/CustomCard';

export default function page() {
  return (
    <div className="gap-24 flex items-start pt-12 pb-32 container mx-auto max-w-5xl">
      <div className="w-1/2">
        <CustomCard />
      </div>
      <div className="w-1/2">
        <Card />
      </div>
    </div>
  );
}
