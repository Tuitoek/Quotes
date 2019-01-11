import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  public hide:boolean= false;
   showForm(){
     this.hide = !this.hide;
   }
  constructor() { }

  ngOnInit() {
  }

}
