import { useRouteError } from "react-router-dom";
import "./errorPage.css";

function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="err-data">
      <p id="error">{err.data}</p>
      <p id="status">
        {err.status} {err.statusText}
      </p>
      <h2 id="final">Please enter the proper destination...</h2>
    </div>
  );
}

export default ErrorPage;
