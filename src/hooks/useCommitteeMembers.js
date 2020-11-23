import { useStaticQuery, graphql } from "gatsby";
import _ from "lodash";

// Helpers: Process the data (divide them in group of 3 or between 1 to 3)
// !!NOTICE: will modify the passed arguments
function processData(data) {
  // perform deep copy of the data
  let dataCopy = _.cloneDeep(data);
  // process the data
  let newData = [];
  while (dataCopy.length > 0) {
    let subCount = dataCopy.length / 3 >= 1 ? 3 : dataCopy.length % 3;
    let obj = [];
    while (obj.length < subCount) {
      obj.push(dataCopy.shift());
    }
    newData.push(obj);
  }
  return newData;
}

export const useCommitteeMembers = grouping => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCommitteeMembers(
        sort: { order: ASC, fields: positionIndex }
      ) {
        nodes {
          id
          nickname
          position
          positionIndex
          profileImage {
            fixed(width: 100, height: 100, quality: 90) {
              ...GatsbyContentfulFixed
            }
          }
          testimonials {
            id
            testimonials
          }
        }
      }
    }
  `);
  return grouping
    ? processData(data["allContentfulCommitteeMembers"]["nodes"])
    : data["allContentfulCommitteeMembers"]["nodes"];
};
