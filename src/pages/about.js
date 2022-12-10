import { Link } from 'gatsby';
import React from 'react'
import Layout from '../components/layout1'
import { useStaticQuery, graphql } from 'gatsby';

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title,
                    description
                }
            }
        }
    `);

    console.log(data);

  return (
        <Layout pageTitle= "Home Page">
            <h1>{data.site.siteMetadata.title}</h1>
            <h1>{data.site.siteMetadata.description}</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby</p>
        </Layout>
  )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name = "description" content = "Your description" />
    </>
);

export default AboutPage
