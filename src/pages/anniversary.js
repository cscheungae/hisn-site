import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Contacts from "../components/contacts";
import PhotoGrid from "../components/photoGrid";

import "../styles/anniversary.scss";

const Anniversary = ({ data }) => {
  const nodes = data["allContentfulAnniversary"]["nodes"];

  return (
    <Layout>
      <div className="anniversary-section">
        <div className="container">
          <h1>周年專頁</h1>

          {nodes.map(node => (
            <div className="anniversary-cards-container">
              <div className="anniversary-card">
                <PhotoGrid
                  anniversaryCount={node["anniversaryCount"]}
                  photos={node["photos"]}
                />
                <div className="anniversary-card-content">
                  <h4 className="anniversary-card-title">{node["title"]}</h4>
                  <h2 className="anniversary-card-title">{node["subtitle"]}</h2>
                  <p>{node["description"]["description"]}</p>
                  <div className="media-button-row">
                    <a href={node["videoUrl"]} target="_blank" rel="noreferrer">
                      video
                    </a>
                    <a
                      href={node["bookletPdf"]["file"]["url"]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      booklet
                    </a>
                    <a href={node["albumUrl"]} target="_blank" rel="noreferrer">
                      album
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Contacts />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulAnniversary(sort: { order: DESC, fields: anniversaryCount }) {
      nodes {
        title
        subtitle
        anniversaryCount
        description {
          id
          description
        }
        photos {
          fluid(quality: 10) {
            base64
            aspectRatio
            src
            srcSet
            sizes
            srcSetWebp
            srcWebp
          }
        }
        videoUrl
        bookletPdf {
          file {
            url
          }
        }
        albumUrl
      }
    }
  }
`;

export default Anniversary;
