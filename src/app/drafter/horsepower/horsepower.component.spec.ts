import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsepowerComponent } from './horsepower.component';

describe('HorsepowerComponent', () => {
  let component: HorsepowerComponent;
  let fixture: ComponentFixture<HorsepowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorsepowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsepowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
