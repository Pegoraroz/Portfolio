import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, me chamo <span className="purple">Lucas Pegoraro </span>
            sou do <span className="purple"> Brasil</span>
            <br /> Estou cursando Desenvolvedor FullStack na universidade Estácio.
            <br />
            Atualmente trabalhando como Técnico de Informática militar.
            <br />
            <br />
            Além de programar também gosto de:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar VideoGame
            </li>
            <li className="about-activity">
              <ImPointRight /> Fazer conteúdo para TikTok
            </li>
            <li className="about-activity">
              <ImPointRight /> Me aventurar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Non videmus manticae quod in tergo est!"{" "}
          </p>
          <footer className="blockquote-footer">Caio Valério Catulo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
