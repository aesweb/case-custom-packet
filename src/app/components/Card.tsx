
'use client';
import { usePackage } from '../context/PackageContext';

export default function Card() {
  const { selectedProducts, setSelectedProducts } = usePackage();

  const totalProducts = Object.values(selectedProducts).reduce(
    (a, b) => a + b,
    0
  );
  const totalPrice = totalProducts * 5; // Örnek fiyatlandırma, her ürün 5 birim fiyatlı

  return (
    <div className="flex flex-col p-8 gap-8 rounded-xl bg-white items-start w-[466px]">
      <span className="text-2xl font-medium">Özel Paketin</span>
      <div className="flex p-3 rounded-lg bg-[#FEFEFE] w-full gap-2 shadow-lg">
        <img src="repeat.svg" alt="" />2 ayda 1 gönderim
      </div>

      <img src="packet.webp" alt="" />

      <div className="flex flex-col gap-2 text-sm rounded-lg bg-[#FEFEFE] shadow-lg w-full items-start p-6">
        <span>Ped Paketleri</span>
        {Object.entries(selectedProducts).map(
          ([product, count]) =>
            count > 0 && (
              <div key={product}>
                <span>
                  {product}: {count}
                </span>
                <button
                  onClick={() =>
                    setSelectedProducts((prev) => ({ ...prev, [product]: 0 }))
                  }
                >
                  paketten çıkar
                </button>
              </div>
            )
        )}
      </div>
      <button className="bg-[#343431] w-full p-3 rounded-full text-white">
        Sepete Ekle ({totalPrice} TL)
      </button>
    </div>
  );
}
