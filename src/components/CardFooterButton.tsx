'use client';
import { useState } from 'react';
import { Button } from '@nextui-org/button';
import { usePackage } from '../context/PackageContext';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function CardFooterButton() {
  const { tabProducts, setTabProducts } = usePackage();
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const allProducts = Object.values(tabProducts).flat();
  const totalPrice = allProducts.reduce(
    (total, product) => total + product.count * 5,
    0
  );

  const removeProduct = (tabName: string) => {
    setTabProducts((prev) => ({
      ...prev,
      [tabName]: prev[tabName].map((product) => ({ ...product, count: 0 })),
    }));
  };

  const hasProducts = allProducts.some((product) => product.count > 0);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

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
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 z-50">
      {isBoxVisible && hasProducts && (
        <div className="py-4 px-3">
          <div className="flex p-3 mb-3 rounded-lg w-full gap-2 shadow-lg text-gray-800 text-sm">
            <img src="repeat.svg" alt="" />2 ayda 1 gönderim
          </div>

          {hasProducts && (
            <div
              className={`${
                isBoxVisible ? 'max-h-96' : 'max-h-0'
              } overflow-hidden transition-max-height duration-300`}
            >
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
            </div>
          )}
        </div>
      )}
      {hasProducts && (
        <div className="flex items-center justify-between p-3 border-t">
          <div className="flex items-center">
            <button onClick={toggleBoxVisibility} className="flex items-center">
              Toplam
              {isBoxVisible ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
          </div>
          <span className="text-lg font-medium">
            {totalPrice.toFixed(2)} TL
          </span>
        </div>
      )}
      <div className="p-3">
        <Button
          className={`w-full p-3 rounded-full ${
            totalPrice === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#343431] text-white'
          }`}
          disabled={totalPrice === 0}
        >
          Sepete Ekle
        </Button>
      </div>
    </div>
  );
}
