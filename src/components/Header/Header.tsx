import Listas from "../List/Listas";
import { useRef } from 'react';
import '../../index.css'

export default function Header() {

  const htmlHeader = useRef<HTMLElement | null>(null)
  const buttonEl = useRef<HTMLButtonElement | null>(null)

  const showNavToggle = function () {
    htmlHeader.current!.classList.toggle('showNav')
    // htmlHeader.current!.style.left = '100%'
  }


  return (
    <>
      <header className="block absolute -left-full text-min-vw h-screen duration-200 ease-in-out md:hidden" ref={htmlHeader}>
        <nav className="bg-[#1F1E26] box-border p-3 text-[#ECEEF2] h-full w-[calc(100vw-100px)] flex flex-col gap-10">
          <h1 className="text-lg">Painel</h1>
          {/* prettier-ignore */}
          <Listas isFocusable={showNavToggle} title={['Home', 'Sobre', 'Dicas p/ produto', 'Serviços', "Calculo BTU's", 'Contato']} url={['#home', '#sobre', '#dicasproduto', '#servicos', '#calculobtus', '#contato']} />
        </nav>
      </header>
      <button ref={buttonEl} onClick={showNavToggle} className="absolute right-0">abrir</button>
    </>
  );
}
