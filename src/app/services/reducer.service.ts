import { Injectable } from '@angular/core';
import Ofertas from '../../assets/json/ofertas.json';

enum ACTION { Update = 1, Nothing = 0 }

@Injectable({
  providedIn: 'root'
})
export class ReducerService {

  state:any;

  constructor() {
    this.state = this.parse(Ofertas[0]);
  }

  loadProducts(){
    var products = [];
    Ofertas.forEach(x => {
      products.push({id: x.id, name: x.versions[0].name});
    });
    return products;
  }

  selector(id:string){
    Ofertas.forEach( x => {
      if(x.id == id) {
        console.log(x);
        this.reducers(this.parse(x), ACTION.Update);
        return;
      }
    })
  }

  reducers(state:any, action:ACTION) {
    switch (action) {

      case ACTION.Update:
        this.state = state;
        return this.state;

      case ACTION.Nothing:
        return this.state;

      default:
        return this.state;

    }
  }

  parse(data:any){
    return {id: data.id, name: data.versions[0].name, caracteristicas: data.versions[0].characteristics.map( ch => {
        return {name: ch.versions[0].name };
      }), prices: data.versions[0].productOfferingPrices.map( po => {
        return {name: po.versions[0].name, amount: po.versions[0].price.amount}
      })};
  }

}
