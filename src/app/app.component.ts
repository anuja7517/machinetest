import { Component, OnInit } from '@angular/core';
import { Istudent } from './shared/model/interface';
import { ProductesService } from './shared/service/productes.service';
import { Iptodut } from './shared/model/interface.products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'machinetest';
  sProdArray !: Array<Iptodut>
  constructor (private _produsService : ProductesService ){

  }


  ngOnInit(): void {
    this.sProdArray = this._produsService.fetchProdt()
  }
stdentarr : Array<Istudent> = [
  {
    fname : "Anuja",
    lname : "Bhosle",
    email : "bhosleanuja50@gmail.com",
    contact : 145632980
  }
]


  
stddate(stdobj:Istudent){
  console.log(stdobj);
  this.stdentarr.push(stdobj)
}

}
