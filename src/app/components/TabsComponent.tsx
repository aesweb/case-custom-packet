import { Tabs, Tab } from '@nextui-org/react';
import BeijePedSliders from './Sliders/BeijePedSliders';
import BeijeGunlukPedSliders from './Sliders/BeijeDailyPedSliders';
import BeijeTamponSliders from './Sliders/BeijeTamponSliders';

export default function TabsComponent() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="options" variant="underlined" className="py-8">
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
