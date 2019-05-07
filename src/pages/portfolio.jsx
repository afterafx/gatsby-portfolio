import React from 'react'
// import { Link, StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Card from 'react-bootstrap/Card'
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

const SecondPage = () => (
  <div className="portfolio">
    <NavBar />
    <Layout>
      <SEO title="Portfolio" />
    </Layout>
    <div className="portfolio-splash">
      <p style={{ fontFamily: 'Roboto' }}>my portfolio</p>
    </div>
    <div
      className="resume"
      style={{
        fontFamily: 'Roboto',
      }}
    >
      <TabContainer id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Qualities</Nav.Link>
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

      <h3>Projects</h3>
      <div className="project-container">
        {/* <Img fluid={data.yamovieImage.childImageSharp.fluid} /> */}
        <Card style={{ width: '800px', marginBottom: '20px' }}>
          <Card.Img variant="top" src="../images/yamovie.png" fluid />
          <Card.Body>
            <Card.Title>YaMovie</Card.Title>
            <Card.Text>
              A movie web application that is aims to helping you find the right movie for you based on your
              preferences. Our chatbot lloyd will help curate content just for you!
            </Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '800px', marginBottom: '20px' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Message Board</Card.Title>
            <Card.Text>A message app that uses the CRUD (Create, Read, Update, Delete) concept</Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '800px', marginBottom: '20px' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Connect Four</Card.Title>
            <Card.Text>A classic game of connect foßur!</Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '800px', marginBottom: '20px' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Eventstream</Card.Title>
            <Card.Text>
              An Android application which was created to share photos in a closed event. Users are able to invite Users
              and share photos that were based on the locations of a certain event.
            </Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '800px', marginBottom: '20px' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Eqvis</Card.Title>
            <Card.Text>
              An R package that was compiled for the use of earthquake visualization. You are able to read in the data.
              You can create an earthquake timeline, and create an interactive map.
            </Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '800px', marginBottom: '20px' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>CourseraPack</Card.Title>
            <Card.Text>
              A package created for Coursera, using data from the US National Highway Traffic Safety Administration. The
              data used is specific to the Fatality Analysis Reporting System. The purpose of this package is to
              demonstrate reading in the data, what years to input, summarize the data and map out the data by state.
            </Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
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

export default SecondPage
