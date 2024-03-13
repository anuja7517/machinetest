import { Component, Input, OnInit } from '@angular/core';
import { ProductesService } from '../../service/productes.service';
import { Iptodut } from '../../model/interface.products';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
 productArr !: Array<Iptodut>
  constructor( private _productsservice : ProductesService) { }
 @Input()product! : Iptodut;
  ngOnInit(): void {
    this.productArr = this._productsservice.fetchProdt()
  }

}
