import React from 'react'
import { graphql } from 'gatsby'

import BlogLayout from '../layouts/blog-layout'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <BlogLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </BlogLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default BlogPost
