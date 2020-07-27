exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    {
        allContentfulDogBlog {
         edges {
           node {
             slug
               }
             }
        }
     }
    `)

    if (result.errors) {
        reporter.panic("Error loading lessons", JSON.stringify(result.errors))
    }

    result.data.allContentfulDogBlog.edges.forEach(node => {
        actions.createPage({
            path: `/${node.node.slug}/`,
            component: require.resolve("./src/templates/blog.tsx"),
            context: {
                slug: node.node.slug,
            },
        })
    })

}
