import Listas from "../List/Listas";
import { useEffect, useRef, useState } from 'react';
import '../../index.css'

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
      {visibilityHeader && <div className="absolute w-full h-full bg-slate-500 md:hidden" onClick={hiddenHeader}></div>}
      <header className="block absolute -left-full  h-screen duration-200 ease-in-out md:hidden" ref={htmlHeader}>
        <nav className="bg-[#1F1E26] box-border p-3 text-[#ECEEF2] h-full overflow-y-auto custom-scrollbar w-[calc(100vw-100px)] flex flex-col gap-10">
          <h1 className="text-lg">Painel</h1>
          {/* prettier-ignore */}
          <Listas isFocusable={isFocusable} title={['Home', 'Sobre', 'Dicas p/ produto', 'Serviços', "Calculo BTU's", 'Contato']} url={['#home', '#sobre', '#dicasproduto', '#servicos', '#calculobtus', '#contato']} />
        </nav>
      </header>
      <div className="absolute right-3 top-3 md:hidden">
        <label className="burger" htmlFor="burger" >
          <input type="checkbox" id="burger" ref={elMenu} onClick={handleNavToggle} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </>
  );
}
