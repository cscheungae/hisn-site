import React from "react";
import { Link, graphql } from "gatsby";
import EventCard from "../components/eventCard";
import Layout from "../components/layout";
import Contacts from "../components/contacts";

import "../components/activity.scss";
import "./event-list.scss";

const EventList = props => {
  const data = props["data"]["allContentfulEvents"]["nodes"];

  return (
    <Layout>
      <div className="eventsPage">
        <div className="activity activity-override" id="activity">
          <div className="container">
            <h1>活動</h1>
            <div className="eventList">
              {data.map((event, eid) => (
                <EventCard eid={eid} event={event} />
              ))}
            </div>
            <div className="btnRow">
              {/* previousPageLink and nextPageLink were added by the plugin */}
              <Link
                type="button"
                className="btn"
                to={props.pageContext.previousPagePath}
                disabled={props.pageContext.previousPagePath === ""}
              >
                上一頁
              </Link>
              <Link
                type="button"
                className="btn"
                to={props.pageContext.nextPagePath}
                disabled={props.pageContext.nextPagePath === ""}
              >
                下一頁
              </Link>
            </div>
          </div>
        </div>
        <Contacts />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulEvents(
      sort: { order: DESC, fields: date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        date
        description {
          description
        }
        eventName
        formPdf {
          file {
            url
          }
        }
        highlights {
          highlightsPdf {
            file {
              url
            }
          }
        }
        posterPdf {
          file {
            url
          }
        }
      }
    }
  }
`;

export default EventList;
