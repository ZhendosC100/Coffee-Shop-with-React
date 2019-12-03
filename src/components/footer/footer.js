import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './footer.sass';
import black_logo from '../../media/logo/Logo_black.svg';
import beans_logo_dark from '../../media/logo/Beans_logo_dark.svg';

const Footer = () => {
  return(
    <footer>
      <Container>

      <Row>
        <Col lg={{size:5, offset:4}}>
              
            <ul className="footer">
              <li className="footer__item">
                <Link to="/">
                  <img src={black_logo} alt="logo"></img>
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/coffe-page/">Our coffee</Link>
              </li>
              <li className="footer__item">
                <Link to="/our-pleasure/">For your pleasure</Link>
              </li>
            </ul>
          
        </Col>   
      </Row>
                 
        <img className="beanslogo" src={beans_logo_dark} alt="Beans logo"></img>
      </Container>
    </footer>
  )
}

export default Footer;