import React from 'react';
import {Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import './header.sass';

const Header = () => {
  return(
    <Row>
    <Col lg="6">
           
      <header>
        <ul className="header">
          <li className="header__item">
            <Link to="/">
              <img src="logo/Logo.svg" alt="logo"></img>
            </Link>
          </li>
          <li className="header__item">
            <Link to="/coffe-page/">Our coffee</Link>
          </li>
          <li className="header__item">
            <Link to="/our-pleasure/">For your pleasure</Link>
          </li>
        </ul>
      </header>
      
    </Col>   
  </Row>


  )
}

export default Header;

