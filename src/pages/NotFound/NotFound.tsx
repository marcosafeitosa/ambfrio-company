import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center gap-5 h-screen">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p>Esta página não foi encontrada, tente novamente..</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}