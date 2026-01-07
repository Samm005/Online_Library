import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  return (
    <>
      <h1>Looks like you entered a wrong link</h1>
    </>
  );
}

export default ErrorPage;
