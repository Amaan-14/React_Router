import { Fragment } from "react";
import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
  const data = useRouteLoaderData("event_detail");
  const event = data.event;
  return (
    <Fragment>
      <EventItem event={event} />
    </Fragment>
  );
};
export default EventDetailPage;
export const eventsDetailLoader = async ({ request, params }) => {
  console.log("detailLoader executed");
  const response = await fetch("http://localhost:8080/events/" + params.ID);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected events" },
      { status: 500 }
    );
  }
  return response;
};

export async function deleteAction({ params, request }) {
  const eventId = params.ID;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  console.log("delete redirect");
  return redirect("/events");
}
