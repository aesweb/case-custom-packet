'use client';

import { Tabs, Tab } from '@nextui-org/react';
import BeijePedSliders from './Sliders/BeijePedSliders';
import BeijeGunlukPedSliders from './Sliders/BeijeDailyPedSliders';
import BeijeTamponSliders from './Sliders/BeijeTamponSliders';
import { usePackage } from '../context/PackageContext';

export default function TabsComponent() {
  const { activeTab, setActiveTab } = usePackage();

  const handleTabChange = (key: string | number) => {
    setActiveTab(key.toString());
  };

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="options"
        variant="underlined"
        className="py-8"
        selectedKey={activeTab}
        onSelectionChange={handleTabChange}
      >
        <Tab key="beije Ped" title="beije Ped">
          <BeijePedSliders />
        </Tab>
        <Tab key="beije günlük ped" title="beije Günlük Ped">
          <BeijeGunlukPedSliders />
        </Tab>
        <Tab key="beije Tampon" title="beije Tampon">
          <BeijeTamponSliders />
        </Tab>
      </Tabs>
    </div>
  );
}
