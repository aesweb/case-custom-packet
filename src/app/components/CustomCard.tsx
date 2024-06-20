'use client';
import TabsComponent from './TabsComponent';

const CustomCard = () => {
  return (
    <div className="flex items-center flex-col gap-20 w-[564px]">
      <div className=" flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="text-2xl">Kendi Paketini Oluştur</div>
          <div className="text-md">Nasıl Çalışır?</div>
        </div>
        <div>
          Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
          miktarlardan, sana özel bir paket oluşturalım.
        </div>
      </div>
      <TabsComponent />
    </div>
  );
};

export default CustomCard;
