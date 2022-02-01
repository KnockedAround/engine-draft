/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InjectorsComponent } from './injectors.component';

describe('InjectorsComponent', () => {
  let component: InjectorsComponent;
  let fixture: ComponentFixture<InjectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
