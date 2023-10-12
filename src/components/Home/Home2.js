import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              VOU <span className="purple"> ME </span> APRESENTAR
            </h1>
            <p className="home-about-body">
              Estou aprendendo sobre o mundo da programação e me divertindo a cada código criado
              <br />
              <br />Estou estudando linguagens como:
              <i>
                <b className="purple"> CSS, Javascript, HTML e Python. </b>
              </i>
              <br />
              <br />
              Meu campo de interesse é &nbsp;
              <i>
                <b className="purple">Criação de sites e Desenvolvimento de automações </b>
              </i>
              <br />
              <br />
              Sempre que possível busco trabalhar em meus projetos principalmente em <b className="purple">Python</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENTRE EM CONTATO</h1>
            <p>
              Sinta se a vontade de me<span className="purple"> Contatar</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pegoraroz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lucas-pegoraro/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pegoraro._"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
