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

  return (
    <div className="flex flex-col gap-8 p-8 rounded-xl bg-white w-[466px]">
      <span className="text-2xl font-medium">Özel Paketin</span>
      <div className="flex p-3 rounded-lg bg-[#FEFEFE] w-full gap-2 shadow-lg text-gray-800 text-sm">
        <img src="repeat.svg" alt="" />2 ayda 1 gönderim
      </div>

      <img src="packet.webp" alt="" />

      {Object.entries(tabProducts).map(([tab, products]) => {
        // Ürünleri filtrele, sadece count > 0 olanları tut
        const filteredProducts = products.filter(
          (product) => product.count > 0
        );

        // Filtrelenmiş ürünler yoksa bu kartı render etme
        if (filteredProducts.length === 0) return null;

        return (
          <div
            className="flex flex-col text-sm rounded-lg bg-[#FEFEFE] shadow-lg w-full items-start gap-2 p-6"
            key={tab}
          >
            <h3 className="text-lg">{tab}</h3>
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
      <button
        className={`w-full p-3 rounded-full ${
          totalPrice === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[#343431] text-white'
        }`}
        disabled={totalPrice === 0}
      >
        Sepete Ekle ({totalPrice} TL)
      </button>
    </div>
  );
}
