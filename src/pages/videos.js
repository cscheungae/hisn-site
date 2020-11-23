import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Contacts from "../components/contacts";

import "../styles/videos.scss";

const Videos = ({ data }) => {
  const [videos] = useState(data.allContentfulVideo.nodes);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);

  return (
    <Layout>
      <div className="videos-section">
        <div className="container">
          <h1>影片</h1>
          <select
            id="videos"
            onChange={event => setCurrentVideoIdx(event.target.value)}
            onBlur={event => setCurrentVideoIdx(event.target.value)}
            value={currentVideoIdx}
          >
            <option value={-1} disabled={true} selected>
              選擇影片
            </option>
            {videos.map((v, i) => (
              <option value={i}>{v.videoName}</option>
            ))}
          </select>
          <div className="desktop-wrapper">
            <div className="video-showcase">
              <iframe
                className="video-frame"
                src={videos[currentVideoIdx].youtubeUrl}
                title={videos[currentVideoIdx].videoName}
              />
              <div className="video-info">
                <h3>{videos[currentVideoIdx].videoName}</h3>
                <p>{videos[currentVideoIdx].description.description}</p>
              </div>
            </div>
            <div className="desktop-select">
              {videos.map((v, i) => (
                <div
                  className={`desktop-option ${
                    i === currentVideoIdx ? "active" : ""
                  }`}
                  onClick={() => setCurrentVideoIdx(i)}
                  onKeyDown={() => setCurrentVideoIdx(i)}
                >
                  {v.videoName}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Contacts />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulVideo(sort: { order: ASC, fields: updatedAt }) {
      nodes {
        id
        videoName
        description {
          description
        }
        youtubeUrl
      }
    }
  }
`;

export default Videos;
