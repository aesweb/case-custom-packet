'use client';

import React, { createContext, useState, useContext } from 'react';

interface PackageContextType {
  selectedProducts: { [key: string]: number };
  setSelectedProducts: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export const PackageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<{
    [key: string]: number;
  }>({});

  return (
    <PackageContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </PackageContext.Provider>
  );
};

export const usePackage = () => {
  const context = useContext(PackageContext);
  if (context === undefined) {
    throw new Error('usePackage must be used within a PackageProvider');
  }
  return context;
};
