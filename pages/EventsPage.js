import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  // if (data.isError === true) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //  return {isError:true,message:"Couldn't fetch events"};
    // throw new Response(JSON.stringify({ message: "Couldn't fetch events" }), {
    //   status: 500,
    // });

    throw json({ message: "Couldn't fetch events" }, { status: 500 });
  }
  return response;
};
