import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavBar from '../components/navbar'

import '../styles/index.scss'

const IndexPage = () => (
  <div className="homepage">
    <NavBar />
    <div className="parallax">
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      </Layout>
      <Jumbotron className="main-jumbo" bg="dark">
        <p className="name">Kevin Baktiar</p>
        <p>Full Stack Developer | Photographer | Musician </p>
      </Jumbotron>
    </div>
  </div>
)

export default IndexPage
