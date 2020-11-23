/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// import { paginate } from 'gatsby-awesome-pagination';
const path = require("path");
const GAP = require("gatsby-awesome-pagination");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Fetch your items (blog posts, categories, etc).
  const result = await graphql(
    `
      {
        allContentfulEvents(sort: { order: DESC, fields: date }, limit: 500) {
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
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const events = result["data"]["allContentfulEvents"]["nodes"];

  // Create your paginated pages
  GAP.paginate({
    createPage, // The Gatsby `createPage` function
    items: events, // An array of objects
    itemsPerPage: 8, // How many items you want per page
    pathPrefix: "/events", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`./src/templates/event-list.js`), // Just like `createPage()`
  });
};
