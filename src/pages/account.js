import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AccountPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Account Gatsby Page Works</h1>
  </Layout>
)

export default AccountPage

export const query = graphql`
  query AccountQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
    }
  }
`
