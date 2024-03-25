type Logo = {
  source: string,
}

export default function LogoCompany({ source }: Logo) {
  return (
    <>
      <div className="flex items-center w-full">
      <img src={source} alt="logo-company" className="h-full"/>
      </div>
    </>
  )
}