import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import classes from '../../components/pages/mainpage/mainPage.module.css';
import GetService from '../../services/coffeeService.js';
import BestItem from '../bestItem';
import Spinner from '../spinner';



export default class Best extends Component  {


  state= {
    items: null,
    loading: true,
    error: false
  }

  data = new GetService();
  componentDidMount(){
    this.data.getItems()
      .then(res => (
        this.setState({
          items: res,
          loading: false
        })
      
      ));
  }

  componentDidCatch = () => {
    this.setState(({error}) => ({error: true, loading: false}));
  }


  
render(){
  const {loading} = this.state;
  
  let content = loading ? <Spinner/> : this.state.items.map((item, index) => {
    return(
      <BestItem key={index} item={item}/>
    )
    })


  return (
    <section className={classes.best}>
    <Container>
      <div className="title">Our best</div>
        <Row>
          <Col lg={{size:10, offset:1}}>
            <div className="best__wrapper">
            {content}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

}

