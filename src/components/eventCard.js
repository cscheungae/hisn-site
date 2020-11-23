import React from "react";

const EventCard = ({ eid, event }) => (
  <div key={`event-${eid}`} className={`event event-${eid}`}>
    <h3 className="eventName">{event["eventName"]}</h3>
    <p className="date">
      <span>
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          className="clock"
        >
          <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M14.586,16l-3.293-3.293 C11.105,12.519,11,12.265,11,12V7c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v4.586l3,3c0.39,0.39,0.39,1.024,0,1.414l0,0 C15.61,16.39,14.976,16.39,14.586,16z" />
        </svg>
      </span>
      <span className="dateText">
        {`${event["date"].slice(0, 4)}年${
          event["date"].slice(5, 6) !== "0"
            ? event["date"].slice(5, 7)
            : event["date"].slice(6, 7)
        }月${
          event["date"].slice(8, 9) !== "0"
            ? event["date"].slice(8, 10)
            : event["date"].slice(9, 10)
        }日`}
      </span>
    </p>
    <p className="description">{event["description"]["description"]}</p>
    <div className="btnRow">
      <a
        type="button"
        className="btn btn-poster"
        disabled={event["posterPdf"] === null}
        href={
          event["posterPdf"] !== null ? event["posterPdf"]["file"]["url"] : ""
        }
        target="_blank"
        rel="noreferrer"
      >
        海報
      </a>
      <a
        type="button"
        className="btn btn-form"
        disabled={event["formPdf"] === null}
        href={event["formPdf"] !== null ? event["formPdf"]["file"]["url"] : ""}
        target="_blank"
        rel="noreferrer"
      >
        報名表格
      </a>
      <a
        type="button"
        className="btn btn-highlights"
        disabled={event["highlights"] === null}
        href={
          event["highlights"] !== null
            ? event["highlights"]["highlightsPdf"]["file"]["url"]
            : ""
        }
        target="_blank"
        rel="noreferrer"
      >
        花絮
      </a>
    </div>
  </div>
);

export default EventCard;
