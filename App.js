// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//  - NewEventPage
//    - EditEventPage

// Done

// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage

// Done

// 3. Add a root layout that adds the <MainNavigation> component above all page components

// Done

// 4. Add properly working links to the MainNavigation

// Done

// 5. Ensure that the links in MainNavigation receive an "active" class when active

// Done

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage

// Done

// 7. Output the ID of the selected event on the EventDetailPage

// Done

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import { eventsDetailLoader } from "./pages/EventDetailPage";
import { deleteAction } from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import { formAction } from "./components/EventForm";
import EditEventPage from "./pages/EditEventPage";
import EventRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import NewsletterPage from "./pages/NewsLetter";
import { NewsLetterAction } from "./pages/NewsLetter";
const routesDefinition = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":ID",
            loader: eventsDetailLoader,
            id: "event_detail",

            children: [
              {
                index: true,
                action: deleteAction,
                element: <EventDetailPage />,
              },
              { path: "edit", action: formAction, element: <EditEventPage /> },
            ],
          },
          { path: "new", action: formAction, element: <NewEventPage /> },
        ],
      },
      {
        path: "/newsletter",
        element: <NewsletterPage />,
        action: NewsLetterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routesDefinition} />;
}

export default App;
