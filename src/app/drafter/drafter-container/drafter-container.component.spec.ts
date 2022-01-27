import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrafterContainerComponent } from './drafter-container.component';

describe('DrafterContainerComponent', () => {
  let component: DrafterContainerComponent;
  let fixture: ComponentFixture<DrafterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrafterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrafterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
