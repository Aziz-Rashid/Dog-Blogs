import React from 'react'
import { graphql } from "gatsby"
import './blog.css'
import Layout from '../components/layout'
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

const blog = ({data:{datas}}) => {
    console.log(datas)
    return (
        <Layout>
        <div className="bg">
            <div className="img">
                <img className="image" src={datas.image.fluid.src} alt=""/>
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
        </Layout>
    )
}

export default blog
