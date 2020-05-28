import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Gatsby Page Works</h1>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query AboutQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
    }
  }
`
