import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarbsensorComponent } from './farbsensor.component';

describe('FarbsensorComponent', () => {
  let component: FarbsensorComponent;
  let fixture: ComponentFixture<FarbsensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarbsensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarbsensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
