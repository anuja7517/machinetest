import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductesService } from '../../service/productes.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
productForm ! : FormGroup;
  constructor( private _productService : ProductesService) { }

  ngOnInit(): void {
  this.creatprodfor()
  }
creatprodfor(){
  this.productForm = new FormGroup({
    Pname: new FormControl(null,[Validators.required]),
    Pdetails :new FormControl(null,[Validators.required]),
   
  })
}

onsumit(){
  if(this.productForm.valid){
    console.log(this.productForm.value);
    this._productService.addprod
    
  }
}


}
