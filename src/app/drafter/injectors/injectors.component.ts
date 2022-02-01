import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hg-injectors',
  templateUrl: './injectors.component.html',
  styleUrls: ['./injectors.component.scss']
})
export class InjectorsComponent implements OnInit, OnDestroy {

  @Output() injectorInformationOut: EventEmitter<{}> = new EventEmitter<{}>();

  numberOfInjectors = new FormControl('');
  injectorDutyCycle = new FormControl('');

  numberOfInjectorsValueChangedSub: Subscription;
  injectorDutyCycleValueChangedSub: Subscription;

  constructor() {
    this.numberOfInjectorsValueChangedSub = new Subscription();
    this.injectorDutyCycleValueChangedSub = new Subscription();
  }

  ngOnInit() {
    this.numberOfInjectorsValueChangedSub = this.numberOfInjectors.valueChanges.subscribe(data => console.log);
    this.injectorDutyCycleValueChangedSub = this.injectorDutyCycle.valueChanges.subscribe(data => console.log);
  }

  ngOnDestroy(): void {
    this.injectorDutyCycleValueChangedSub.unsubscribe();
    this.numberOfInjectorsValueChangedSub.unsubscribe();
  }


}
