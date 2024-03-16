type Logo = {
  source: string,
}

export default function LogoCompany({ source }: Logo) {
  return (
    <>
      <div className="flex items-center">
        <img src={source} alt="logo-company" className="h-16" />
      </div>
    </>
  )
}