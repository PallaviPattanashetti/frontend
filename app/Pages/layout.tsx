import React from 'react'
import { NavLinks } from '../Components/NavLinks';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <NavLinks />
      {children}
    </div>
  )
}

export default layout
