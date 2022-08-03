import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineDatepickerComponent } from './inline-datepicker.component';

describe('InlineDatepickerComponent', () => {
  let component: InlineDatepickerComponent;
  let fixture: ComponentFixture<InlineDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
