import React from "react"
import Cards from '../components/Cards/Cards'
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

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
    <PageTransition defaultStyle={{
      transition: 'left 2000ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      left: '100%',
      position: 'absolute',
      width: '100%',
    }}
    transitionStyles={{
      entering: { left: '0%' },
      entered: { left: '0%' },
      exiting: { left: '100%' },
    }}
    transitionTime={5000}>
    <div className="bg">
        {edges.map(el =>(
         <Cards key={el.node.title} title={el.node.title} about={el.node.about} image={el.node.image.fluid.src} slug={el.node.slug}/>
        ))}
        </div>
        </PageTransition>
  </Layout>
  )
}

export default IndexPage
