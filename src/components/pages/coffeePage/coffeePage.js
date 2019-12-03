import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../../header';
import Footer from '../../footer';
import coffee_girl from '../../../media/img/coffee_girl.jpg';
import beans_logo_dark from '../../../media/logo/Beans_logo_dark.svg';
import classes from './coffeePage.module.css';
import './coffeePage.sass';

export default class CoffeePage extends Component {
  render(){
    return(
      <>
        <div className={classes.banner}>
          <Container>
            <Header/>
            <h1 className="title-big">Our Coffee</h1>
          </Container>
        </div>

        <section className="shop">
        <Container>
            <Row>
                <Col lg={{size:4, offset:2}}>
                    <img className="shop__girl" src={coffee_girl} alt="girl"></img>
                </Col>
                <Col lg={{size:4}}>
                    <div className="title">About our beans</div>
                    <img className="beanslogo" src={beans_logo_dark} alt="Beans logo"></img>
                    <div className="shop__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                        so questions. <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                        is song that held help face.
                    </div>
                </Col>
            </Row>
            <div className="line"></div>
            <Row>
                <Col lg={{size:4, offset:2}}>
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"></input>
                    </form>
                </Col>
                <Col lg={{size:4}}>
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            <button className="shop__filter-btn">Brazil</button>
                            <button className="shop__filter-btn">Kenya</button>
                            <button className="shop__filter-btn">Columbia</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{size:10, offset:1}}>
                    <div className="shop__wrapper">
                        <div className="shop__item">
                            <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                            <div className="shop__item-title">
                                Solimo Coffee Beans 2kg
                            </div>
                            <div className="shop__item-country">Brazil</div>
                            <div className="shop__item-price">10.73$</div>
                        </div>
                        <div className="shop__item">
                            <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                            <div className="shop__item-title">
                                Presto Coffee Beans 1kg
                            </div>
                            <div className="shop__item-country">Brazil</div>
                            <div className="shop__item-price">15.99$</div>
                        </div>
                        <div className="shop__item">
                            <img src="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg" alt="coffee"></img>
                            <div className="shop__item-title">
                                AROMISTICO Coffee 1kg
                            </div>
                            <div className="shop__item-country">Brazil</div>
                            <div className="shop__item-price">6.99$</div>
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