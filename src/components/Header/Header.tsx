import Listas from "../List/Listas";
import { useRef, useState } from 'react';
import '../../index.css'

export default function Header() {

  const boxHidden = useRef<HTMLDivElement | null>(null);
  const [headerCtn, setHeaderCtn] = useState<boolean | null>(false)
  const htmlHeader = useRef<HTMLElement | null>(null);
  const buttonEl = useRef<HTMLButtonElement | null>(null);

  const showNavToggle = function () {
    htmlHeader.current!.classList.toggle('showNav');
    setHeaderCtn(booleanHeader => !booleanHeader)
  }

  const hiddenHeader = function () {
    htmlHeader.current!.classList.toggle('showNav');
    setHeaderCtn(!true)
  }


  return (
    <>
      {headerCtn && <div className="absolute w-full h-full" ref={boxHidden} onClick={hiddenHeader}></div>}
      <header className="block absolute -left-full  h-screen duration-200 ease-in-out md:hidden" ref={htmlHeader}>
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
