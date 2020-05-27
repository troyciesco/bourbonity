import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query MyQuery {
    datoCmsSite {
      globalSeo {
        facebookPageUrl
        siteName
        titleSuffix
        twitterAccount
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to {data.datoCmsSite.globalSeo.siteName}.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <section>
      <h2>Silver Stacking Ring</h2>
      <p>$19.99</p>
      <p>Wear one or seventeen! These rings are fun to mix and match.</p>
      <button
        className="snipcart-add-item snipcart-checkout"
        data-item-id="silver-stacking-ring"
        data-item-price="19.99"
        data-item-url="/"
        data-item-name="Silver Stacking Ring"
      >
        Add to cart
      </button>
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
