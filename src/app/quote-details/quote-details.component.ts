import { Component, OnInit} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  quotes=[
    new Quote(1,"We have to do the best we are capable of.This is our sacred human responsibility","~Albert Einsten.",new Date(2018,8,12)),
    new Quote(2,"Two roads diverged in a wood,and I took the one less travelled by,and that has made all the difference","~Robert Frost.",new Date (2018,9,16)),
  ]

  constructor() { }

  ngOnInit() {
  }

}
