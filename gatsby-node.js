exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  const results = await graphql(
    `
      {
        allContentfulCatalog {
          nodes {
            slug
          }
        }
      }
    `
  );

  if (results.error) {
    console.log(results.errors);
    return;
  }

  results.data.allContentfulCatalog.nodes.forEach((node) => {       
    createPage({
      path: `${node.slug}`,
      component: require.resolve("./src/templates/stuffTemplate.js"),
      context: {
        slug: node.slug,
      }
    })
  });
};