import { useState } from 'react';
import '../../index.css'
import DesktopNav from './DesktopNav'
// import Mobile from './Mobile'
import Hamburguer from '../Hamburguer/Hamburguer';
import LogoCompany from '../LogoCompany';
import Mobile from './Mobile';

export default function Header() {

  const [menuMobile, setMenuMobile] = useState<boolean | null>(null);
  // useEffect(() => {
  //   console.log(menuMobile);
  // }, [menuMobile]);

  const handleMenuNav = function (stateNavHamburguer: boolean) {
    setMenuMobile(stateNavHamburguer)
  }
  return (
    <>
      <header className='px-5 bg-[#222228] h-full flex flex-col'>
        <div className='flex justify-between items-center h-24'>
          <LogoCompany source="../../../public/assets/logo-company.svg" />
          <DesktopNav />
          <Hamburguer handleMenu={handleMenuNav} />
        </div>
        {menuMobile &&
          <Mobile />
        }

        {/* <img src="../../src/Icons/Header/icon-1.png" alt="" /> */}
      </header>
    </>
  )
}