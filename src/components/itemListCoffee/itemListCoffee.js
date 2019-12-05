import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import CoffeeService from '../../services/coffeeService.js';
import CoffeeItem from '../coffeeItem';
import Spinner from '../spinner';

export default class ItemListCoffee extends Component{


  state = {
    itemCofee: null,
    loading: true,
    error: false
}

dataCoffee = new CoffeeService();

componentDidMount(){
  this.dataCoffee.getItemsCoffee()
    .then(res => {
      this.setState({
        itemCofee: res,
        loading: false
      })
    });
}

componentDidCatch = () => {
  this.setState(({error}) => ({error: true, loading: false}));
}

 render(){
    const {loading} = this.state;
    let content = loading ? <Spinner/> : this.state.itemCofee.map((item, key) => {
      return (
        <CoffeeItem key={key} item={item}/>
      )
    })

  return(

    <Row>
    <Col lg={{size:10, offset:1}}>
        <div className="shop__wrapper">
            
            {content}

        </div>
    </Col>
</Row>

    

  )
 }
}

