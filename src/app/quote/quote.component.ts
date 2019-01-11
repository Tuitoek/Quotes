import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
import{Form} from '../quotes-form'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote(1,"We have to do the best we are capable of.This is our sacred human responsibility.~Albert Einsten."),
    new Quote(2,"Two roads diverged in a wood,and I took the one less travelled by,and that has made all the difference.~Robert Frost.")
  ]

  constructor() { }

  ngOnInit() {
  }

}
