import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

export default class SearchCoffee extends Component {


  state = {
    term: ""
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term); 
}

// onUpdateFilter = (name) => {
//   const {term} = this.state;
//   this.setState({term: name});
// }

  render(){

    const button = [
      {name: "brazil", title: "brazil"},
      {name: "kenya", title: "kenya"},
      {name: "Columbia", title: "Columbia"}
    ]

    const Buttons = () => {
      return(
        button.map(({name, title}) => {
          console.log(name);
          const key = Math.floor(Math.random()*(200 - 10)) + 10;
          console.log(key);
          return(
            <button  
              key={key}
              className="shop__filter-btn"
              onClick={() => this.props.onUpdateFilter(name)}
            > {title} </button>
          )
        })
      )
    }
    
      return(
        <Row>
          <Col lg={{size:4, offset:2}}>
            <form  action="#" className="shop__search">
              <label className="shop__search-label" htmlFor="filter">Looking for</label>
              <input 
                id="filter" 
                type="text" 
                placeholder="start typing here..." 
                className="shop__search-input"
                onChange={this.onUpdateSearch}>
                </input>
            </form>
          </Col>
          <Col lg={{size:4}}>
            <div className="shop__filter">
              <div className="shop__filter-label">
                Or filter
              </div>
              <div className="shop__filter-group">
                {/* <button  className="shop__filter-btn">Brazil</button>
                <button  className="shop__filter-btn">Kenya</button>
                <button  className="shop__filter-btn">Columbia</button> */}
                <Buttons/>
              </div>
            </div>
          </Col>
        </Row>
      )
  }
}