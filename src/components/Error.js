import { useRouteError } from "react-router-dom";

const Error = () => {
  const e = useRouteError();
  console.log(e);
  return (
    <div>
      <h1>Oops Something Went wrong..</h1>
      <h3>
        {e.status} : {e.statusText}
      </h3>
    </div>
  );
};

export default Error;
