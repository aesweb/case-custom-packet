'use client';
import TabsComponent from './TabsComponent';

const CustomCard = () => {
  return (
    <div className="flex flex-col gap-12 max-w-[564px] px-6">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-black font-medium">
            Kendi Paketini Oluştur
          </div>
          <div className="text-sm font-light">Nasıl Çalışır?</div>
        </div>
        <div className="text-sm font-light text-gray-500">
          Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
          miktarlardan, sana özel bir paket oluşturalım.
        </div>
      </div>
      <div>
        <TabsComponent />
      </div>
    </div>
  );
};

export default CustomCard;
