import React from 'react'
import Layout from '../components/layout1';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
   <Layout pageTitle= "Home Page">
       <p>I'm making this by floolwing the Gatsby Tutorial</p>
       <StaticImage 
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
   </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage