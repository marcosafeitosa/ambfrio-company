import Lists from "../Listas/Lists";
// import LogoCompany from "../LogoCompany";

export default function DesktopNav() {
  return (
    <>
      <nav className="h-28 flex justify-between items-center">
        <div className="hidden min-[790px]:block">
          <Lists iconBoolean={false} classUl="list-none flex items-center gap-20" />
        </div>
      </nav>
    </>
  )
}