import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {


  showAnswer = false;
  openedCard = -1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAnswer(cardId: number) {
    this.openedCard = cardId;
  }

  closeCard() {
    this.openedCard = -1;
  }
}
