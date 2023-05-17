import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsensorComponent } from './bandsensor.component';

describe('BandsensorComponent', () => {
  let component: BandsensorComponent;
  let fixture: ComponentFixture<BandsensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandsensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandsensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
