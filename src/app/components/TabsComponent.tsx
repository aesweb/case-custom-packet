'use client';
import { Tabs, Tab } from '@nextui-org/react';
import BeijePedSliders from './Sliders/BeijePedSliders';
import BeijeTamponSliders from './Sliders/BeijeTamponSliders';
import { usePackage } from '../context/PackageContext';
import BeijeDailyPedSliders from './Sliders/BeijeDailyPedSliders';

export default function TabsComponent() {
  const { activeTab, setActiveTab } = usePackage();

  const handleTabChange = (key: string | number) => {
    setActiveTab(key.toString());
  };

  return (
    <div className="flex flex-col">
      <Tabs
        aria-label="options"
        variant="underlined"
        className="py-8"
        selectedKey={activeTab}
        onSelectionChange={handleTabChange}
        fullWidth
        size="md"
      >
        <Tab key="beije Ped" title="beije Ped">
          <BeijePedSliders />
        </Tab>
        <Tab key="beije günlük ped" title="beije Günlük Ped">
          <BeijeDailyPedSliders />
        </Tab>
        <Tab key="beije Tampon" title="beije Tampon">
          <BeijeTamponSliders />
        </Tab>
      </Tabs>
    </div>
  );
}
