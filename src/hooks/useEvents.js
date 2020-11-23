import { useStaticQuery, graphql } from "gatsby";

export const useEvents = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulEvents(limit: 5, sort: { order: DESC, fields: date }) {
        nodes {
          eventName
          description {
            id
            description
          }
          date
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
  `);
  return data.allContentfulEvents.nodes;
};
