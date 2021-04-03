import img from './images/bhushan.jpg';
import Typed from 'react-typed';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';

export default function Hero() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <Container data-aos="zoom-in" data-aos-delay="500">
          <Row>
              <Col lg={6} className="item-center">
                  <h1>Bhushan Borole</h1>
                  <p>I'm a&nbsp;
                    <span class="typed" data-typed-items="Developer, Tabla Player, Gamer">
                      <Typed 
                        strings={["Developer", "Tabla Player", "Gamer"]}
                        loop
                        typeSpeed={90}
                        backSpeed={60}
                        smartBackspace
                        shuffle={false}
                        backDelay={500}
                        fadeOut={true}
                        fadeOutDelay={200}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                      />
                    </span>
                  </p>
                  <div class="social-links">
                      <a href="https://twitter.com/bhushanborole26"><i class="bx bxl-twitter"></i></a>
                      <a href="https://www.instagram.com/bhushan_2698/" ><i class="bx bxl-instagram"></i></a>
                      <a href="https://github.com/bhushan-borole" ><i class="bx bxl-github"></i></a>
                      <a href="https://www.linkedin.com/in/bhushan-borole/"><i class="bx bxl-linkedin"></i></a>
                      <a href="mailto:borolebhushan8@gmail.com"><i class="bx bx-envelope"></i></a>
                  </div>
                  <Button 
                    href=""
                  ></Button>
              </Col>
              <Col lg={6}>
                  <img src={ img } height="100%" width="95%" style={{ borderRadius: "30px" }} />
              </Col>
          </Row>
      </Container>
    </section>
  );
}