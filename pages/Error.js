import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { Fragment } from "react";
const ErrorPage = () => {
  let title = "An error ocuured";
  let message = "Something went wrong";
  const error = useRouteError();

  if (error.status === 404) {
    title = "It's 404 error";
    message = "It's 404 message.";
  }
  if (error.status === 500) {
    title = "It's 500 error";
    console.log(error);
    message = error.data.message;
  }

  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};
export default ErrorPage;
