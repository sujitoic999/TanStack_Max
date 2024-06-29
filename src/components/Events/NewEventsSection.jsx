import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  const { data, isPending, error } = useQuery({
    //useQuery() returns {loading , error ,data} properties that we can use to render our UI
    queryKey: ["events"],
    queryFn: fetchEvents, //this function should be a function which will return a promise
    staleTime: 5000, // after this much time cached data will be refetched in background
    gcTime: 30000, // after this much time cached data will be garbage collected
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (error) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info.message || "failed to fect events"}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
