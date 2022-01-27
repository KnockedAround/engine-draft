import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './drafter-container.component.html',
  styleUrls: ['./drafter-container.component.scss']
})
export class DrafterContainerComponent implements OnInit {

  horsepower: number;

  constructor() {
    this.horsepower = 0;
  }
  
  ngOnInit(): void {
  }

  handleHorsepowerInput(hp: number): void {
    if (!+hp) {
      this.horsepower = 0;
      return;
    }

    this.horsepower = hp;
  }

}
