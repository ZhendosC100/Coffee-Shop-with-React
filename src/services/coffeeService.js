
export default class CoffeeService {

    getResoures = async (url) => {
      const res = await fetch(url);
  
      if (!res.ok) {
        throw new Error(`Could not fetch src/db.json` +
          `, received ${res.status}`);
      }
      return await res.json();
    }
  
    getItems = async () => {
      return await this.getResoures('/bestsellers');
    }

    getItemsCoffee = async () => {
      return await this.getResoures('/coffee');
    }

    getItemsGoods = async () => {
      return await this.getResoures('/goods');
    }
  }