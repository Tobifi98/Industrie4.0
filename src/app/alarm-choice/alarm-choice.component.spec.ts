import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmChoiceComponent } from './alarm-choice.component';

describe('AlarmChoiceComponent', () => {
  let component: AlarmChoiceComponent;
  let fixture: ComponentFixture<AlarmChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
