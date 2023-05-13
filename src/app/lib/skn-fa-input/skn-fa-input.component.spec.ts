import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SknFaInputComponent } from './skn-fa-input.component';

describe('SknFaInputComponent', () => {
  let component: SknFaInputComponent;
  let fixture: ComponentFixture<SknFaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SknFaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SknFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
