import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../../model/interface';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
 @Input() stdArr! : Istudent[]
  constructor() { }

  ngOnInit(): void {
  }

}
