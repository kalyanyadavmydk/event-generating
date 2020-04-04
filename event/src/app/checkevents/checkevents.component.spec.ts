import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckeventsComponent } from './checkevents.component';

describe('CheckeventsComponent', () => {
  let component: CheckeventsComponent;
  let fixture: ComponentFixture<CheckeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
