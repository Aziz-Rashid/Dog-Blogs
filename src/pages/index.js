import React from "react"
import Cards from '../components/Cards/Cards'
import Layout from "../components/layout"
import { graphql } from "gatsby"
export const query = graphql`
  {
     lesson : allContentfulDogBlog {
      edges {
        node {
          slug
          title
          price
          image {
            fluid {
              src
            }
          }
          about
        }
      }
    }
  }
`
const IndexPage = ({data:{lesson:{edges}}}) => {
  return(
  <Layout>
    <div className="bg">
        {edges.map(el =>(
         <Cards title={el.node.title} about={el.node.about} image={el.node.image.fluid.src} slug={el.node.slug}/>
        ))}
        </div>
  </Layout>
  )
}

export default IndexPage
