import React from 'react';

const CoffeItem = ({cards}) => {

const ContentCards = () => {
  return (
    cards.map((item) => {
      const key = Math.floor(Math.random()*(500 - 100)) + 10;
      const {url, name, country, price} = item;
      return (
        <div key={key} className="shop__item">
          <img src={url} alt="coffee"></img>
          <div className="shop__item-title">
            {name}
          </div>
          <div className="shop__item-country"> {country} </div>
          <div className="shop__item-price"> {price} </div>
        </div>
      )
    })
  )
} 

    return(
      <ContentCards/>
    )
}

export default CoffeItem;