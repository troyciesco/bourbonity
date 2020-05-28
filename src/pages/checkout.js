import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CheckoutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Checkout Gatsby Page Works</h1>
  </Layout>
)

export default CheckoutPage

export const query = graphql`
  query CheckoutQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
    }
  }
`
