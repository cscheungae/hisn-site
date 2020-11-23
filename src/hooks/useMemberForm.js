import { useStaticQuery, graphql } from "gatsby";

export const useMemberForm = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulAsset(
        filter: { title: { eq: "HISN_membership_form(R9)" } }
      ) {
        nodes {
          id
          file {
            fileName
            url
          }
        }
      }
    }
  `);
  return data.allContentfulAsset.nodes[0];
};
