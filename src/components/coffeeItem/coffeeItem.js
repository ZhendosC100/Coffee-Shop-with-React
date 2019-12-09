import React from 'react';

const CoffeItem = ({cards}) => {

const contentCards =  cards.map((item) => {
    const {url, name, country, price} = item;
     
      
    
    return (
        <div className="shop__item">
            <img src={url} alt="coffee"></img>
            <div className="shop__item-title">
              {name}
            </div>
            <div className="shop__item-country"> {country} </div>
            <div className="shop__item-price"> {price} </div>
      </div>
    )
  });

  console.log(cards);
    return(

      {contentCards}
      // <div className="shop__item">
      //       <img src={url} alt="coffee"></img>
      //       <div className="shop__item-title">
      //         {name}
      //       </div>
      //       <div className="shop__item-country"> {country} </div>
      //       <div className="shop__item-price"> {price} </div>
      // </div>
    )
}

export default CoffeItem;