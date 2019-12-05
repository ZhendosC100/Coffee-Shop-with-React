import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import Header from '../../header';
import Best from '../../best';
import Footer from '../../footer';
import beans_logo from '../../../media/logo/Beans_logo.svg';
import './mainPage.sass';
import classes from './mainPage.module.css';
import About from '../../about';

export default class MainPage extends Component {

  render(){
    
    return(
      <>
        <div className={classes.preview}>
          <Container>
            <Header/>
            <Row>
              <Col lg={{size:10, offset:1}}>
                <h1 className="title-big">Everything You Love About Coffee</h1>
                <img className="beanslogo" src={beans_logo} alt="Beans logo"></img>
                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                <div className="preview__subtitle">Want to try our beans?</div>
                <Link to="/coffe-page/" className="preview__btn">More</Link>
              </Col>
            </Row>
          </Container>
          </div>

          <About/>
          <Best/>
          <Footer/>
        </>
    )
  }
}