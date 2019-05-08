import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'

import '../styles/contact.scss'

const Contact = () => (
  <div className="contact-main">
    <Navbar />
    <div className="contact-body">
      <article className="bio">
        <h3>About Me</h3>
        <p>
          Hi, my name is Kevin Baktiar. I'm a Computer Science graduate of CSUN. I currently work for Talent Path as a
          Software Engineer/Full Stack Engineer. Before Talent Path, I helped run my fathers business, Sky Motors
          Company as a Technician, getting vehicles ready for sale and onto their new owner. Some of my hobbies include
          playing paintball, music production using Ableton to compose electronic music in a variety of styles, working
          on my vehicles by upgrading parts and keeping it detailed and attending electronic music festivals.
        </p>
      </article>
      <section className="contact">
        <h3>Contact me</h3>
        <h4>Phone: 661-805-7557</h4>
        <h4>Email: afterafx@gmail.com</h4>
        <ol className="contact-list">
          <li>
            <Link href="https://www.facebook.com/AfterAfx">Facebook</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/kevinbaktiar/">Linkedln</Link>
          </li>
          <li>
            <Link href="https://github.com/afterafx">Github</Link>
          </li>
          <li>
            <Link href="https://twitter.com/afterafx">Twitter</Link>
          </li>
          <li>
            <Link href="https://instagram.com/afterafx">Instagram</Link>
          </li>
        </ol>
      </section>
      <img src="https://avatars3.githubusercontent.com/u/6364815?s=460&v=4" alt="none" width="300px" />
    </div>
  </div>
)

export default Contact
