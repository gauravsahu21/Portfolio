import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import xboard from "../../Assets/Projects/xboard.png"
import qtrip from "../../Assets/Projects/qtrip.png"
import qkart from "../../Assets/Projects/qkart.png"
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qtrip}
              isBlog={false}
              title="QTripDynamic"
              description="QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities build with react.js, Material-UI. Created web pages using HTML and CSS and made them dynamic using JavaScript."
              ghLink="https://github.com/gauravsahu21/gk989kumar-ME_QTRIPDYNAMIC"
              demoLink="https://gauravkr-qtrip.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qkart}
              isBlog={false}
              title="QKart Frontend"
              description="QKart is an e-commerce application offering a variety of products for customers to choose from. Implemented the core logic for authentication, shopping cart and checkout. Utilized REST APIs to dynamically load and render data served by the backend server."
              ghLink="https://github.com/gauravsahu21/gk989kumar-ME_QKART_FRONTEND_V2"
              demoLink="https://gauravqkartfron.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xboard}
              isBlog={false}
              title="XBoard"
              description="XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.Built XBoard using HTML, CSS, Bootstrap and JavaScript.Fetched news content from flipboard's RSS feed using REST API.Deployed the website to Netlify/Vercel."
              ghLink="https://github.com/gauravsahu21/Xboard"
              demoLink="https://xboard-gaurav.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
