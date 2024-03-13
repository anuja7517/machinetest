import { Injectable } from '@angular/core';
import { Iptodut } from '../model/interface.products';

@Injectable({
  providedIn: 'root'
})
export class ProductesService {

productArry : Array<Iptodut> =[
  {
    Pname : "Redmi",
    Pdetails : "mobile 258",
    Pstatus : "Inpogress",
    id :   "hxcg123"
  },
  {
    Pname : "one +",
    Pdetails : "mobile 458",
    Pstatus : "Delivered",
    id :   "hgbx566"
  },
  {
    Pname : "vivo",
    Pdetails : "mobile 741",
    Pstatus : "dispatched",
    id :   "hib 125"
  }
]

fetchProdt(){
   return this.productArry
}
addprod(products : Iptodut) {
  this.productArry.push(products)
}




  constructor() { }
}
