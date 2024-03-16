import '../../index.css'
import { useRef } from 'react';

type Props = {
  handleMenu: (propInput: boolean) => void,
}

export default function Hamburguer({ handleMenu }: Props) {
  const inputEl = useRef<HTMLInputElement | null>(null)
  const isChecked = function () {
    handleMenu(inputEl.current?.checked || false) 
  };

  return (
    <>
      <div className='block min-[790px]:hidden'>
        <input id="checkbox" ref={inputEl} type="checkbox" onClick={isChecked} />
        <label className="toggle" htmlFor="checkbox">
          <div id="bar1" className="bars bg-black"></div>
          <div id="bar2" className="bars bg-black"></div>
          <div id="bar3" className="bars bg-black"></div>
        </label>
      </div>
    </>
  )
}
