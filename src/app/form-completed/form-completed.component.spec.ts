import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompletedComponent } from './form-completed.component';

describe('FormCompletedComponent', () => {
  let component: FormCompletedComponent;
  let fixture: ComponentFixture<FormCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
