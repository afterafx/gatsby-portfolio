import React from 'react'
import Navbar from '../components/navbar'
import '../styles/blog.scss'

const BlogLayout = ({ children }) => (
  <main className="blog-main">
    <Navbar />
    <section>{children}</section>
  </main>
)

export default BlogLayout
