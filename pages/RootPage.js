import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

const RootPage = () => {
  const navigation = useNavigation();
  return (
    <Fragment>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </Fragment>
  );
};
export default RootPage;
