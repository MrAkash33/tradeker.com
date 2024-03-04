import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/image.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              TradekeR: Where Every Trade Counts!{" "}
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <h3>"Your ultimate trading companion - TradekeR!"</h3>
                {/* <Type /> */}
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
