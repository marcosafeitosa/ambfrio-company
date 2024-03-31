type Logo = {
  source: string,
}

export default function LogoCompany({ source }: Logo) {
  return (
    <>
      <div className="flex items-center w-full h-full">
      <img src={source} alt="logo-company" className="h-10"/>
      </div>
    </>
  )
}