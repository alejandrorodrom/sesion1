import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSpecialComponent } from './button-special.component';

describe('ButtonSpecialComponent', () => {
  let component: ButtonSpecialComponent;
  let fixture: ComponentFixture<ButtonSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
