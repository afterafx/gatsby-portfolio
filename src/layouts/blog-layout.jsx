import React from 'react'
import Navbar from '../components/navbar'
import '../styles/blog.scss'

const BlogLayout = ({ children }) => (
  <main className="blog-main">
    <Navbar />
    <section className="blog-content">{children}</section>
  </main>
)

export default BlogLayout
