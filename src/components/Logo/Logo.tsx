type LogoCompany = {
  source: string,
}

export default function Logo({ source }: LogoCompany) {
  return (
    <>
      <div className="flex items-center w-full h-full">
      <img src={source} alt="logo-company" className="h-10"/>
      </div>
    </>
  )
}