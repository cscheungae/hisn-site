import { useStaticQuery, graphql } from "gatsby";

export const useBGImg = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: { fixed: { originalName: { eq: "IMG_4149_bbq.jpg" } } }
      ) {
        edges {
          node {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  `);
  return data.allImageSharp.edges[0].node.fluid;
};
