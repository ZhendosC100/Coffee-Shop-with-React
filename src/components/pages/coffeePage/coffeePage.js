import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../../header';
import AboutGoods from '../../aboutGoods';
import AboutBeans from '../../aboutBeans';
import SearchCoffee from '../../searchCoffee';
import Footer from '../../footer';
import coffee_girl from '../../../media/img/coffee_girl.jpg';
import coffee from '../../../media/img/coffee.png';
import beans_logo_dark from '../../../media/logo/Beans_logo_dark.svg';
import classes from './coffeePage.module.css';
import './coffeePage.sass';
import ItemListCoffee from '../../itemListCoffee/itemListCoffee';

export default class CoffeePage extends Component {

    state = {
      term: null
    }

    onUpdateSearch = (term) => {
      this.setState({
        term
      })
    }

  render(){
      const {pleasurePage} = this.props;
      let title = pleasurePage ? "For your pleasure" : "Our Coffee";
      let titleAbout = pleasurePage ? "About our beans" : "About our goods"
      const {term} = this.state;

    return(
      <>
        <div className={classes.banner}>
          <Container>
            <Header/>
            <h1 className="title-big"> {title} </h1>
          </Container>
        </div>

        <section className="shop">
        <Container>
            <Row>
                <Col lg={{size:4, offset:2}}>
                    <img className="shop__girl" src={pleasurePage ? coffee :coffee_girl} alt="girl"></img>
                </Col>
                <Col lg={{size:4}}>
                    <div className="title"> {titleAbout} </div>
                    <img className="beanslogo" src={beans_logo_dark} alt="Beans logo"></img>
                    {pleasurePage ? <AboutGoods/> : <AboutBeans/>}
                </Col>
            </Row>
            <div className="line"></div>
            {pleasurePage ? null : <SearchCoffee onUpdateSearch ={this.onUpdateSearch} />}
           <ItemListCoffee termListCoffee={term} />
        </Container>
    </section>

        <Footer/>
      </>
    )
  }
}