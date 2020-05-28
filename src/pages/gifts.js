import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GiftsPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Gifts Gatsby Page Works</h1>
  </Layout>
)

export default GiftsPage

export const query = graphql`
  query GiftsQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
    }
  }
`
