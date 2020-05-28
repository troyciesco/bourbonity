import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RedeemPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Redeem Gatsby Page Works</h1>
  </Layout>
)

export default RedeemPage

export const query = graphql`
  query RedeemQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
    }
  }
`
