import React from 'react'
import { RichText } from 'prismic-reactjs'

const Product = ({ slice }) => (
  <section>
    <RichText render={slice.primary.productName} />
    <span >{ slice.primary.publishedAt }</span>
    <img src={slice.primary.productImage.url} alt={slice.primary.productImage.alt} />
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default Product