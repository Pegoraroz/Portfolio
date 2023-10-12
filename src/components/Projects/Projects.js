import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import matriz from "../../Assets/Projects/matriz.png";
import primeirositesite from "../../Assets/Projects/primeiro-site.png";
import lhpets from "../../Assets/Projects/lhpets.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong> recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui esta alguns dos projetos que recentemente criei
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matriz}
              isBlog={false}
              title="Cadastro Matriz SoD"
              description="Aplicativo de cadastro de usuários e sistemas com algumas funções automatizadas, leitura de banco de dados e resolução de conflitos entre perfis de acesso."
              ghLink="https://github.com/MNAntunes02/Projeto-Certificacao-M1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={primeirositesite}
              isBlog={false}
              title="Primeiro Site"
              description="Primeiro site que desenvolvi utilizando HTML e CSS, usando um pouco de JS para fazer recursos funcionais deixando o site mais dinâmico."
              ghLink="https://github.com/Pegoraroz/trabalho-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lhpets}
              isBlog={false}
              title="LH Pets"
              description="Site criado para fazer Gerenciamento de Clínicas veterinárias, obtendo informações sobre o cliente, clínica e paciente, conseguindo também fazer o orçamento dos procedimentos realizados"
              ghLink="https://github.com/Pegoraroz/sp3-ativ5/"          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
