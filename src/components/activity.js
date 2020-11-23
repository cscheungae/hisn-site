import React from "react";
import { Link } from "gatsby";
import JoinUs from "../components/joinUs";
import EventCard from "./eventCard";

import "./activity.scss";
import { useEvents } from "../hooks/useEvents";

const Activity = () => {
  const data = useEvents();

  return (
    <div className="activity" id="activity">
      <div className="container">
        <h1>活動</h1>
        <div className="eventList">
          {data.map((event, eid) => (
            <EventCard eid={eid} event={event} />
          ))}
        </div>
        <div className="btn-more-row">
          <Link to="/events" className="btn-more">
            更多活動
          </Link>
        </div>
      </div>
      <JoinUs />
    </div>
  );
};

export default Activity;
