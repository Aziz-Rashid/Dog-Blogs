import React from 'react'
import { graphql } from "gatsby"
import './blog.css'
import Layout from '../components/layout'
import PageTransition from 'gatsby-plugin-page-transitions';

export const query = graphql` 
    query ($slug: String!) {
    datas: contentfulDogBlog(slug: {eq: $slug}) {
        image {
            fluid {
              src
            }
          }
        title
        price
        description {
            description
          }
            }
        }
      
    
`

const blog = ({ data: { datas } }) => {
    console.log(datas)
    return (
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
                    <div className="img">
                        <img className="image" src={datas.image.fluid.src} alt="" />
                    </div>
                    <div>
                        <div className="heading">
                            <h1>{datas.title} </h1>
                            <h3>Price: {datas.price}</h3>
                        </div>
                        <div className="para">
                            <p>{datas.description.description}</p>
                        </div>
                    </div>
                </div>
            </PageTransition>
        </Layout>
    )
}

export default blog
