import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HowItWorksPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HowItWorks Gatsby Page Works</h1>
  </Layout>
)

export default HowItWorksPage

export const query = graphql`
  query HowItWorksQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
    }
  }
`
