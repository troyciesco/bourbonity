import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuizPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Quiz Gatsby Page Works</h1>
  </Layout>
)

export default QuizPage

export const query = graphql`
  query QuizQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
    }
  }
`
