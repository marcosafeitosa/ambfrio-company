import "../index.css";
import Hamburguer from "./Hamburguer/Hamburguer";
import Lists from './Listas/Lists';
import LogoCompany from "./LogoCompany";

export default function HeaderDesktop() {
  return (
    <>
      <div className="box-border z-50 flex flex-col h-screen font-normal font-header lg:px-10">
        <header className="">
          <div className="flex justify-between items-center">

            <LogoCompany source="../src/assets/logo-company.svg" />

            <Lists itemCur={['Início', 'Cuidado', 'Sobre', 'Serviços', 'Contato']}

              classDiv="hidden lg:block flex flex-row items-center font-raleway font-semibold text-base"

              classUl="list-none flex flex-row items-center gap-20 font-raleway font-semibold text-base bg-transparent rounded-none" />

            <Hamburguer />

          </div>

        </header>
        <div className="bg-neutral-800 h-full w-full overflow-auto z-[-1] text-red-50 lg:hidden">
          <Lists itemCur={['Início', 'Cuidado', 'Sobre', 'Serviços', 'Contato', 'asds', 'asdasd', 'asdsa']}

            classDiv="relative"

            classUl="list-none flex flex-col gap-20 p-10" />
        </div>
      </div>
    </>
  );
}
