'use client';

import React, { createContext, useState, useContext } from 'react';

interface Product {
  name: string;
  count: number;
}

interface TabProducts {
  [key: string]: Product[];
}

interface PackageContextType {
  tabProducts: TabProducts;
  setTabProducts: React.Dispatch<React.SetStateAction<TabProducts>>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export const PackageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tabProducts, setTabProducts] = useState<TabProducts>({
    'beije Ped': [],
    'beije günlük ped': [],
    'beije Tampon': [],
  });
  const [activeTab, setActiveTab] = useState<string>('beije Ped');

  return (
    <PackageContext.Provider
      value={{ tabProducts, setTabProducts, activeTab, setActiveTab }}
    >
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
