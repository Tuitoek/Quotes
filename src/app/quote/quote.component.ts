import { Component, OnInit,Input} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, "We have to do the best we are capable of.This is our sacred human responsibility"),
    new Quote(2, "Two roads diverged in a wood,and I took the one less travelled by,and that has made all the difference"),
  ]
  @Input() quote: Quote;
  plusQuote(quote){
    let quoteLength = this.quotes.length;
    this.quotes.push(quote);
  }
;
  constructor() { }

  ngOnInit() {
  }

}
