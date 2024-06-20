import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
export default function TabsComponent() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="options" variant="underlined">
        <Tab key="beije Ped" title="beije Ped">
          <Card>
            <CardBody>111</CardBody>
          </Card>
        </Tab>
        <Tab key="beije günlük ped" title="beije Günlük Ped">
          <Card>
            <CardBody>3333</CardBody>
          </Card>
        </Tab>
        <Tab key="beije Tampon" title="beije Tampon">
          <Card>
            <CardBody>2222</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
