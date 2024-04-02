import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div>About</div>
      <div>Mudanca de pagina efetuada com sucesso.</div>
      <button className=" bg-blue-800 w-40"><Link className='text-lg p-4 block w-full' to={`/`}>HOME</Link></button>
    </>
  )
}

export default About