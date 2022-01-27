import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hg-horsepower',
  templateUrl: './horsepower.component.html',
  styleUrls: ['./horsepower.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorsepowerComponent implements OnInit, OnDestroy {

  @Output() hpOut: EventEmitter<number> = new EventEmitter<number>();

  horsepower = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*')
  ]);

  hpValueChangeSub: Subscription;

  constructor() {
    this.hpValueChangeSub = new Subscription();
  }

  ngOnInit(): void {
    this.hpValueChangeSub = this.horsepower.valueChanges.subscribe(value => this.hpOut.emit(value));
  }

  ngOnDestroy() {
    this.hpValueChangeSub.unsubscribe();
  }

}
