import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestsEditComponent } from './intrests-edit.component';

describe('IntrestsEditComponent', () => {
  let component: IntrestsEditComponent;
  let fixture: ComponentFixture<IntrestsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrestsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrestsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
