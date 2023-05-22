import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAlarmsComponent } from './current-alarms.component';

describe('CurrentAlarmsComponent', () => {
  let component: CurrentAlarmsComponent;
  let fixture: ComponentFixture<CurrentAlarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentAlarmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
