import React, { Fragment, useState } from "react";
import Img from "gatsby-image";
import { useCommitteeMembers } from "../hooks/useCommitteeMembers";

import "./memberPanel.scss";

/*
 * A Group consist of a row of three icon imagges
 * and their respective testimonials
 */
const Group = ({ group, rowIdx, selectedMember, chooseMember }) => {
  return (
    <Fragment>
      <div className={`row row-${rowIdx}`}>
        {group.map((person, currentIdx) => (
          <div
            className={`${
              rowIdx * 3 + currentIdx === selectedMember ? "active" : ""
            }`}
            onKeyDown={() => chooseMember(rowIdx * 3 + currentIdx)}
            onClick={() => chooseMember(rowIdx * 3 + currentIdx)}
            role="contentinfo"
          >
            <Img
              key={`row-${rowIdx}-person-${rowIdx * 3 + currentIdx}`}
              fixed={person["profileImage"]["fixed"]}
              className={`position-${person["positionIndex"]}`}
              alt={person["nickname"]}
            />
          </div>
        ))}
      </div>
      <div className={`infoRow infoRow-${rowIdx}`}>
        {group.map((person, currentIdx) => (
          <div
            key={`info-${rowIdx * 3 + currentIdx}`}
            className={`info ${
              rowIdx * 3 + currentIdx === selectedMember ? "active" : ""
            }`}
          >
            <h3 className="nickname">{person["nickname"]}</h3>
            <h4 className="position">{person["position"]}</h4>
            <p className="testimonials">
              {person["testimonials"]["testimonials"]}
            </p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

const MemberGrid = ({ selectedMember, chooseMember }) => {
  const data = useCommitteeMembers(true);

  return (
    <Fragment>
      {data.map((group, index) => (
        <Group
          key={index}
          group={group}
          rowIdx={index}
          selectedMember={selectedMember}
          chooseMember={chooseMember}
        />
      ))}
    </Fragment>
  );
};

const DesktopInfoCol = ({ selectedMember }) => {
  const data = useCommitteeMembers(false);

  return (
    <div className="desktopInfoCol">
      {data.map((person, pid) => (
        <div
          key={pid}
          className={`desktopInfo ${pid === selectedMember ? "active" : ""}`}
        >
          <h2 className="nickname">
            <span>{person["nickname"]}</span>
          </h2>
          <h3 className="position">
            <span>{person["position"]}</span>
          </h3>
          <p className="testimonials">
            {person["testimonials"]["testimonials"]}
          </p>
        </div>
      ))}
    </div>
  );
};

const MemberPanel = () => {
  const [selectedMember, chooseMember] = useState(0);

  return (
    <div className="memberPanel" id="memberPanel">
      <div className="container">
        <h1>幹事成員</h1>
        <div className="arrangement">
          <div className="memberList">
            <MemberGrid
              selectedMember={selectedMember}
              chooseMember={chooseMember}
            />
          </div>
          <DesktopInfoCol selectedMember={selectedMember} />
        </div>
      </div>
    </div>
  );
};

export default MemberPanel;
