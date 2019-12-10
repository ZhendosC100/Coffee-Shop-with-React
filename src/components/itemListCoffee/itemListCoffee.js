import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import CoffeeService from '../../services/coffeeService.js';
import CoffeeItem from '../coffeeItem';
import Spinner from '../spinner';

export default class ItemListCoffee extends Component{


  state = {
    itemCofee: null,
    loading: true,
    filterPos: "",
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



searchCoffee = (items, term) => {


  if(term.length === 0){
      return items
  }
  return items.filter((item)=>{
    
      return item.country.toLowerCase().indexOf(term.toLowerCase()) > -1
 
  });
}

// filterCoffee = (items, filter) => {
//   if(filter === 'like'){
//       return items.filter(item => item.like)
//   } else {
//       return items
//   }
// }



 render(){
    const {loading, filterPos, itemCofee} = this.state;

    const visibleCards = this.searchCoffee(itemCofee, filterPos);

    let content = loading ? <Spinner/> : <CoffeeItem cards={visibleCards}/>
    
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

