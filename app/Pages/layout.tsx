
import React from 'react'
import { NavLinks } from '../Components/NavLinks';
import { MapLocationProvider } from '@/context/context';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MapLocationProvider> 
      <div className="flex flex-col min-h-screen">
        <NavLinks />
      
        <main className="grow">
          {children}
        </main>
      </div>
    </MapLocationProvider>
  );
}

export default layout;
