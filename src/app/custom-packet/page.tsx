import Card from '../../components/Card';
import CustomCard from '../../components/CustomCard';
import CardFooterButton from '../../components/CardFooterButton';

export default function page() {
  return (
    <div className="gap-24 flex items-start pt-6 md:pt-12 pb-16 md:pb-32 container mx-auto max-w-5xl">
      <div className="w-full md:w-1/2">
        <CustomCard />
      </div>
      <div className="hidden md:block md:w-1/2">
        <Card />
      </div>
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 z-50">
        <CardFooterButton />
      </div>
    </div>
  );
}
