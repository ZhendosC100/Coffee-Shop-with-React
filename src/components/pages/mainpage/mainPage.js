import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../../header';
import Footer from '../../footer';
import beans_logo from '../../../media/logo/Beans_logo.svg';
import beans_logo_dark from '../../../media/logo/Beans_logo_dark.svg';
import './mainPage.sass';
import classes from './mainPage.module.css';

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
                <a href="#" className="preview__btn">More</a>
              </Col>
            </Row>
          </Container>
          </div>
          <section className="about">

            <Container>
              <Row>
                <Col lg={{size: 6, offset: 3}}>
                
                      <div className="title">About Us</div>
                      <img className="beanslogo" src={beans_logo_dark} alt="Beans logo"></img>
                      <div className="about__text">
                          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                          Afraid at highly months do things on at. Situation recommend objection do intention
                          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                          met spot shy want. Children me laughing we prospect answered followed. At it went
                          is song that held help face.<br/><br/>

                          Now residence dashwoods she excellent you. Shade being under his bed her, Much
                          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                          horrible but confined day end marriage. Eagerness furniture set preserved far
                          recommend. Did even but nor are most gave hope. Secure active living depend son
                          repair day ladies now.
                      </div>
                
                </Col>
              </Row>
            </Container>

          </section>

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