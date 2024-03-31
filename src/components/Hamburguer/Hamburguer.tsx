import React from 'react';

type Props = {
  handleMenu?: (propInput: boolean) => void;
  handleClickMenu: () => void;
}

const Hamburguer = React.forwardRef<HTMLInputElement, Props>(({ handleClickMenu }, ref) => {
  const handleClick = () => {
    handleClickMenu();
  }

  return (
    <div className='flex min-[790px]:hidden'>
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" ref={ref} onClick={handleClick} />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
});

export default Hamburguer;
