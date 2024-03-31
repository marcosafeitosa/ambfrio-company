import Listas from "../List/Listas";
import { useEffect, useRef, useState } from 'react';
import '../../index.css'
import Hamburguer from "../Hamburguer/Hamburguer";
import LogoCompany from "../Logo";

export default function Header() {

  const [visibilityHeader, setvisibilityHeader] = useState<boolean | null>(false)
  const elMenu = useRef<HTMLInputElement | null>(null)
  const htmlHeader = useRef<HTMLElement | null>(null);

  const handleNavToggle = function () {
    htmlHeader.current!.classList.toggle('showNav');
    setvisibilityHeader(booleanHeader => !booleanHeader)
  }

  const handleHamburguer = function () {
    elMenu.current!.checked = false
  }

  const isFocusable = function () {
    handleNavToggle()
    handleHamburguer()
  }

  const hiddenHeader = function () {
    htmlHeader.current!.classList.toggle('showNav');
    elMenu.current!.checked = false
    setvisibilityHeader(!true)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        htmlHeader.current!.classList.remove('showNav');
        elMenu.current!.checked = false
        setvisibilityHeader(!true)
      }
    })
  }, [])


  return (
    <>
      {visibilityHeader && <div className="absolute w-full h-full md:hidden" onClick={hiddenHeader}></div>}

      <header className="block absolute -left-full h-screen duration-200 ease-in-out md:hidden" ref={htmlHeader}>
        <nav className="bg-[#1F1E26] box-border p-3 text-[#ECEEF2] h-full overflow-y-auto custom-scrollbar w-[calc(100vw-100px)] flex flex-col gap-10">
          <h1 className="text-lg">Painel</h1>
          {/* prettier-ignore */}
          <Listas isFocusable={isFocusable} title={['Home', 'Sobre', 'Dicas p/ produto', 'Serviços', "Calculo BTU's", 'Contato']} url={['#home', '#sobre', '#dicasproduto', '#servicos', '#calculobtus', '#contato']} />
        </nav>
      </header>

      <div className="font-raleway md:hidden">
        <div className="flex justify-between items-center px-3 h-16">
          <LogoCompany source="/assets/logo-company.svg" />
          <div className="flex justify-between items-center gap-4 h-full">
            <span className="text-xs">HOME</span>
            <span className="inline-block bg-[#e5e7eb] w-[0.6px] h-full"></span>
            <Hamburguer handleClickMenu={handleNavToggle} ref={elMenu} />
          </div>
        </div>
        <hr className="w-full" />
      </div>
    </>
  );
}
