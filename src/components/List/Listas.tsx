import React, { useRef, useEffect, useState } from "react";
import '../../index.css'
import Icons from '../../../public/Icons/Header';

interface Lista {
  title: string[]
  url: string[]
  isFocusable?: () => void
}


export default function Listas({ title, url, isFocusable }: Lista) {

  const arr = useRef<(HTMLElement | null)[]>([])

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setFocusedIndex(index);
    arr.current[0]!.style.background = 'none'
    setTimeout(() => {
     isFocusable!() 
    }, 300);
    // isFocusable!()
  };

  return (
    <ul className="flex flex-col gap-5">
      <>
        {title.map((listTitle, i) => {
          // console.log(Icons()[i] ? Icons()[i] : 'Imagem não encontrada.')
          return url[i] ?
            <li key={i} ref={el => arr.current[i] = el} className="first:bg-[#161517] flex bg-gray-500 cursor-pointer w-full">
              <img src={Icons()[i]} alt="" />
              <a href={url[i]} onClick={() => handleItemClick(i)} className={`w-full p-3 rounded-lg ${focusedIndex === i ? "bg-[#161517]" : ""
                }`}>{listTitle}</a>
            </li>
            : <p>Erro</p>
        })}
      </>
    </ul>
  )
}