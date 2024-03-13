import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istudent } from '../../model/interface';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {

@ViewChild ("fname") fname ! : ElementRef;
@ViewChild ("lname") lname ! : ElementRef;
@ViewChild ("email") email ! : ElementRef;
@ViewChild ("contact") contact ! : ElementRef;

 @Output()stdDates: EventEmitter <Istudent> = new EventEmitter<Istudent>()

  constructor() { }

  ngOnInit(): void {
  }


  onstudents(){
    let obj : Istudent = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      email :this.email.nativeElement.value,
      contact : this.contact.nativeElement.value
    }
    //console.log(obj);
    if (!Object.values(obj).includes("")){
      console.log(obj);
      this.stdDates.emit(obj)
      
    }
    

  }

}
