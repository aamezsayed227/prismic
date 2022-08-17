import React from 'react'
import { RichText } from 'prismic-reactjs'

const ImageCard = ({ slice }) => (
  <section>
  <img src={slice.primary.blogImage.url} alt={slice.primary.blogImage.alt} />
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

export default ImageCard