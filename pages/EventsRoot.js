import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import EventsNavigation from "../components/EventsNavigation";
// import { useNavigation } from "react-router-dom";
const EventRoot = () => {
// const navigation=useNavigation();
  return (
    <Fragment>
      <EventsNavigation />
      <main>
        {/* {navigation.state==="loading" && <p>Loading...</p>} */}
      <Outlet />
      </main>
      
    </Fragment>
  );
};
export default EventRoot;
