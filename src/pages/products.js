import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductsPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Products Gatsby Page Works</h1>
    {data.products.edges.map(({ node: product }) => {
      return (
        <div key={product.id}>
          <div
            className="Product snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-image={product.image.url}
            data-item-name={product.name}
            data-item-url={`/products`}
          >
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <img
              src={product.image.url}
              alt="test"
              style={{ height: "250px", width: "auto" }}
            />
            <button>Add to Cart</button>
          </div>
        </div>
      )
    })}
  </Layout>
)

export default ProductsPage

export const query = graphql`
  query ProductsQuery {
    products: allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          image {
            url
          }
        }
      }
    }
  }
`
