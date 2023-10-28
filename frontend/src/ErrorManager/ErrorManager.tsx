import { useLocation } from "react-router-dom";
import React from "react";

export default function ErrorManager() {
  const location = useLocation();
  const error = location.state as {
    statusText: string;
    message: string;
  };

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
