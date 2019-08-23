import React from 'react'
// import { Link, StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import Nav from 'react-bootstrap/Nav'
import TabPane from 'react-bootstrap/TabPane'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import NavBar from '../components/navbar'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import Image from '../components/image'

import '../styles/portfolio.scss'

// const { data } = this.props

const Portfolio = () => (
  <div className="portfolio">
    <NavBar />
    <Layout>
      <SEO title="Portfolio" />
    </Layout>
    {/* <div className="portfolio-splash">
      <p style={{ fontFamily: 'Roboto' }}>my portfolio</p>
    </div> */}
    <div
      className="resume"
      style={{
        fontFamily: 'Roboto',
        fontWeight: '200',
      }}
    >
      <TabContainer id="left-tabs" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="first">
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="second">
                  Experience
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="third">
                  Qualities
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent>
              <TabPane eventKey="first">
                <ListGroup className="skills-container" variant="flush">
                  <ListGroup.Item>
                    <b>Software Engineering:</b> Java, R
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Web Development:</b> Javascript, HTML, CSS, React, Express, Node, MongoDB
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Software:</b> VS Code, Xcode, RStudio, Andriod Studio
                  </ListGroup.Item>
                </ListGroup>
              </TabPane>
              <TabPane eventKey="second">
                <ListGroup className="work-container" variant="flush">
                  <ListGroup.Item>
                    <b>Genuent | TalentPath</b> 2019 - Present: Full Stack Engineer
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Z911 Parts Store</b> 2015 - 2016: CEO, Founder
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Sky Motors Company</b> 2010 - 2019: Automotive Technician
                  </ListGroup.Item>
                </ListGroup>
              </TabPane>
              <TabPane eventKey="third">
                <ListGroup className="personal-container" variant="flush">
                  <ListGroup.Item>Team player with great personality and open minded</ListGroup.Item>
                  <ListGroup.Item>
                    Responsible, highly dependable, positive attitude, and great work ethics
                  </ListGroup.Item>
                  <ListGroup.Item>Hard working and motivated to aquire new skills</ListGroup.Item>
                </ListGroup>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>

      <hr />
      <h3>Projects</h3>
      <div className="project-container">
        {/* <Img fluid={data.yamovieImage.childImageSharp.fluid} /> */}
        <div className="projects">
          <div className="project-item">
            <h3>Memory Game</h3>
            <div className="memory-image" />
            <p>
              A game web application of the classic concentration game. The task is to pair matching cards to win the
              game.
            </p>
            <Button variant="outline-dark" target="_blank" href="https://afterafx-memory-game.netlify.com">
              View Project
            </Button>
            <Button variant="outline-dark" target="_blank" href="https://github.com/afterafx/memory-game">
              View Source Code
            </Button>
          </div>
          <div className="project-item">
            <h3>YaMovie</h3>
            <div className="yamovie-image" />
            <p>
              A movie web application that is aims to helping you find the right movie for you based on your
              preferences. Our chatbot lloyd will help curate content just for you!
            </p>
            <Button variant="outline-dark" target="_blank" href="https://www.yamovie.me/">
              View Project
            </Button>
            <Button variant="outline-dark" target="_blank" href="https://github.com/yamovie">
              View Source Code
            </Button>
          </div>
          <div className="project-item">
            <h3>Message Board</h3>
            <div className="message-image" />
            <p>A message app that uses the CRUD (Create, Read, Update, Delete) concept</p>
            {/* <Button variant="primary" target="_blank" href="">
              View Project
            </Button> */}
            <Button variant="outline-dark" target="_blank" href="https://github.com/afterafx/message-board">
              View Source Code
            </Button>
          </div>
          <div className="project-item">
            <h3>Connect Four</h3>
            <div className="connect-image" />
            <p>A classic game of connect four!</p>
            {/* <Button variant="primary" target="_blank" href="">
              View Project
            </Button> */}
            <Button variant="outline-dark" target="_blank" href="https://github.com/afterafx/connect-four">
              View Source Code
            </Button>
          </div>
          <div className="project-item">
            <h3>What You See Is What You Get!</h3>
            <div className="wysiwyg-image" />
            <p>Simple application where you are able to add/remove headers and paragraphs</p>
            {/* <Button variant="primary" target="_blank" href="">
              View Project
            </Button> */}
            <Button variant="outline-dark" target="_blank" href="https://github.com/afterafx/wysiwyg">
              View Source Code
            </Button>
          </div>
          <div className="project-item">
            <h3>Eqvis</h3>
            <div className="eqvis-image" />
            <p>
              An R package that was compiled for the use of earthquake visualization. You are able to read in the data.
              You can create an earthquake timeline, and create an interactive map.
            </p>
            {/* <Button variant="primary" target="_blank" href="">
              View Project
            </Button> */}
            <Button variant="outline-dark" target="_blank" href="https://github.com/afterafx/eqvis">
              View Source Code
            </Button>
          </div>
          <div className="project-item">
            <h3>CourseraPack</h3>
            <div className="coursera-image" />
            <p>
              A package created for Coursera, using data from the US National Highway Traffic Safety Administration. The
              data used is specific to the Fatality Analysis Reporting System. The purpose of this package is to
              demonstrate reading in the data, what years to input, summarize the data and map out the data by state.
            </p>
            {/* <Button variant="primary" target="_blank" href="">
              View Project
            </Button> */}
            <Button variant="outline-dark" target="_blank" href="https://github.com/afterafx/courseraPack">
              View Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// export const pageQuery = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         yamovieImage: file(relativePath: { eq: "yamovie.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 300) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img fluid={data.yamovieImage.childImageSharp.fluid} />}
//   />
// )

export default Portfolio
