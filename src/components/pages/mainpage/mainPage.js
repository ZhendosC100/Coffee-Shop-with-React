import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../../header';
import './mainPage.sass';

export default class MainPage extends Component {
  render(){
    return(
      <>
        <div className="preview">
        <Container>
          <Header/>
          <Row>
            <Col lg={{size: 10, offset: 1}}>
              <h1 className="title-big">Everything You Love About Coffee</h1>
              <img className="beanslogo" src="logo/Beans_logo.svg" alt="Beans logo"></img>
              <div clasNames="preview__subtitle">We makes every day full of energy and taste</div>
              <div clasNames="preview__subtitle">Want to try our beans?</div>
              <a href="#" className="preview__btn">More</a>
            </Col>
          </Row>
        </Container>
        <section className="about">

          <Container>
            <Row>
              <Col lg={{size: 6, offset: 3}}>
              
                    <div className="title">About Us</div>
                    <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"></img>
                    <div className="about__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.<br></br>

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
        </div>
      </>
    )
  }
}