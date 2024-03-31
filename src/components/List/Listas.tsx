import React, { useRef, useState } from "react";
import '../../index.css'
import Icons from '../../../public/Icons/Header/Icons';

interface Lista {
  title: string[]
  url: string[]
  isFocusable?: () => void
}


export default function Listas({ title, url, isFocusable }: Lista) {
  const arr = useRef<(HTMLElement | null)[]>([])
  // const [backgroundSet, setBackgroundSet] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setFocusedIndex(index);
    setTimeout(() => {
      isFocusable!()
    }, 300);
    // isFocusable!()
  };

  return (
    <ul className="flex flex-col gap-5 font-raleway font-semibold">
      <>
        {title.map((listTitle, i) => {
          // console.log(Icons()[i] ? Icons()[i] : 'Imagem não encontrada.')
          return url[i] ?
            <li key={i} ref={el => arr.current[i] = el} onClick={() => handleItemClick(i)} className={`first:${focusedIndex === 0 ? 'bg-[#161517]' : ''} flex items-center px-4 gap-2 py-3 rounded-lg cursor-pointer ${focusedIndex === i ? "bg-[#161517]" : ""
              }`}>
                <img src={Icons()[i]} alt="icons" className="h-7" />
                <a href={url[i]} className="relative top-[1.5px]">{listTitle}</a>
            </li>
            : <p>Erro</p>
        })}
      </>
    </ul>
  )
}