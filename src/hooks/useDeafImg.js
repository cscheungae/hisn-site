import { useStaticQuery, graphql } from "gatsby";

export const useDeafImg = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: { fixed: { originalName: { eq: "deaf-org.png" } } }
      ) {
        edges {
          node {
            fixed(width: 150) {
              base64
              width
              height
              srcSet
              src
            }
          }
        }
      }
    }
  `);
  return data.allImageSharp.edges[0].node.fixed;
};
