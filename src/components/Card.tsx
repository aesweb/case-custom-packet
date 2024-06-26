'use client';

import { Button } from '@nextui-org/button';
import { usePackage } from '../context/PackageContext';

export default function Card() {
  const { tabProducts, setTabProducts } = usePackage();

  const allProducts = Object.values(tabProducts).flat();
  const totalPrice = allProducts.reduce(
    (total, product) => total + product.count * 5,
    0
  ); // Örnek fiyatlandırma

  const removeProduct = (tabName: string) => {
    setTabProducts((prev) => ({
      ...prev,
      [tabName]: prev[tabName].map((product) => ({ ...product, count: 0 })),
    }));
  };

  // Tab isimlerini özelleştirmek için bir fonksiyon
  const getTabTitle = (tabName: string) => {
    switch (tabName) {
      case 'beije Ped':
        return 'Ped Paketleri';
      case 'beije günlük ped':
        return 'Günlük Ped Paketleri';
      case 'beije Tampon':
        return 'Tampon Paketleri';
      default:
        return tabName;
    }
  };

  return (
    <div className="flex flex-col gap-8 p-8 rounded-xl bg-white max-w-[420px] ">
      <div className="text-2xl font-medium mb-6">Özel Paketin</div>
      <div className="flex p-3 rounded-lg bg-[#FEFEFE] w-full gap-2 shadow-lg text-gray-800 text-sm">
        <img src="repeat.svg" alt="" />2 ayda 1 gönderim
      </div>
      <div className="mt-6">
        <img src="packet.webp" alt="" />
      </div>

      {Object.entries(tabProducts).map(([tab, products]) => {
        const filteredProducts = products.filter(
          (product) => product.count > 0
        );

        if (filteredProducts.length === 0) return null;

        return (
          <div
            className="flex flex-col text-sm rounded-lg bg-[#FEFEFE] shadow-lg w-full items-start gap-2 p-6 my-4"
            key={tab}
          >
            <h3 className="text-lg">{getTabTitle(tab)}</h3>
            <div className="flex gap-2 text-xs">
              {filteredProducts.map((products) => (
                <div key={products.name}>
                  <span>
                    {products.count} {products.name}
                  </span>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeProduct(tab)}
            >
              Paketten Çıkar
            </Button>
          </div>
        );
      })}
      <Button
        className={`w-full p-3 rounded-full mt-12 ${
          totalPrice === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[#343431] text-white'
        }`}
        disabled={totalPrice === 0}
      >
        Sepete Ekle ({totalPrice} TL)
      </Button>
    </div>
  );
}
