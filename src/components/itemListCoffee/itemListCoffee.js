import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import CoffeeService from '../../services/coffeeService.js';
import CoffeeItem from '../coffeeItem';
import Spinner from '../spinner';

export default class ItemListCoffee extends Component{


  state = {
    itemCofee: null,
    loading: true,
    filterPos: null,
    error: false
}

dataCoffee = new CoffeeService();

componentDidMount(){
  // const {termListCoffee} = this.props;
  this.dataCoffee.getItemsCoffee()
    .then(res => {
      this.setState({
        itemCofee: res,
        loading: false
      })
    });
    
}

componentDidUpdate(prevProps){
 if(this.props.termListCoffee !== prevProps.termListCoffee){
    this.filterList();
    // console.log(this.state.filterPos);
 } 
}

filterList = () => {
  const {termListCoffee} = this.props;
    this.setState({
      filterPos: termListCoffee
    })
}

componentDidCatch = () => {
  this.setState(({error}) => ({error: true, loading: false}));
}

 render(){
    const {loading, filterPos, itemCofee} = this.state;
   
    let content = loading ? <Spinner/> : itemCofee.map((item, key) => {
    //  console.log(item);
     let itemFilter; 
     if (filterPos){
      for (const keyItem in item){
        if (item[keyItem] === filterPos){
         itemFilter = item;
          return (
            <CoffeeItem key={key} item={itemFilter}/>
          )
        }
        
      }
     } else {
      return (
        <CoffeeItem key={key} item={item}/>
      )
     } 
      // return (
      //   <CoffeeItem key={key} item={item}/>
      // )

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

