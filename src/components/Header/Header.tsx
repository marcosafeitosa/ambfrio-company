import Listas from "../List/Listas";
import { useEffect, useRef, useState } from 'react';
import '../../index.css'
import Hamburguer from "../Hamburguer/Hamburguer";
import { Link } from "react-router-dom";
// import LogoCompany from "../Logo";

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


  type Movies = {
    titulo: string
    avatar: string
  }

  const [movies, setMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = async function () {
    setLoading(true)
    let response = await fetch('https://api.b7web.com.br/cinema/')
    let json = await response.json();
    setLoading(false)
    setMovies(json)
    console.log(json)
  }

  return (
    <>

      <button onClick={loadMovies} className="bg-slate-300 p-4">Ver filmes</button>
      <button className="bg-black text-white p-4"><Link to={`/About`}>About</Link></button>
      {
        loading && <svg viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      }
      <div className="h-20 w-20 flex">
        {movies.map((mov, id) => {
          return (
            <>
              <img key={id} src={mov.avatar} />
              <p>{mov.titulo}</p>
            </>
          )
        })}
      </div>


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
          {/* <LogoCompany source="/assets/logo-company.svg" /> */}
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
