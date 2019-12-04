import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import Header from '../../header';
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
          <section className={classes.best}>
              <Container>
                  <div className="title">Our best</div>
                  <Row>
                      <Col lg={{size:10, offset:1}}>
                          <div className="best__wrapper">
                              <div className="best__item">
                                  <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                                  <div className="best__item-title">
                                      Solimo Coffee Beans 2kg
                                  </div>
                                  <div className="best__item-price">10.73$</div>
                              </div>
                              <div className="best__item">
                                  <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                                  <div className="best__item-title">
                                      Presto Coffee Beans 1kg
                                  </div>
                                  <div className="best__item-price">15.99$</div>
                              </div>
                              <div className="best__item">
                                  <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                                  <div className="best__item-title">
                                      AROMISTICO Coffee 1kg
                                  </div>
                                  <div className="best__item-price">6.99$</div>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </section>

          <Footer/>
        </>
    )
  }
}