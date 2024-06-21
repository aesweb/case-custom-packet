'use client';

import { usePackage } from '../context/PackageContext';

export default function Card() {
  const { tabProducts } = usePackage();

  const allProducts = Object.values(tabProducts).flat();
  const totalPrice = allProducts.reduce(
    (total, product) => total + product.count * 5,
    0
  ); // Örnek fiyatlandırma

  return (
    <div className="flex flex-col p-8 gap-8 rounded-xl bg-white items-start w-[466px]">
      <span className="text-2xl font-medium">Özel Paketin</span>
      <div className="flex p-3 rounded-lg bg-[#FEFEFE] w-full gap-2 shadow-lg">
        <img src="repeat.svg" alt="" />2 ayda 1 gönderim
      </div>

      <img src="packet.webp" alt="" />

      <div className="flex flex-col gap-2 text-sm rounded-lg bg-[#FEFEFE] shadow-lg w-full items-start p-6">
        <span>Ped Paketleri</span>
        {Object.entries(tabProducts).map(([tab, products]) => (
          <div key={tab}>
            <h3>{tab}</h3>
            {products.map((product) => (
              <div
                key={product.name}
                className="flex flex-col items-start gap-2"
              >
                <span>
                  {product.count}
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="bg-[#343431] w-full p-3 rounded-full text-white">
        Sepete Ekle ({totalPrice} TL)
      </button>
    </div>
  );
}
