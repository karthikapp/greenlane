import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymobileComponent } from './categorymobile.component';

describe('CategorymobileComponent', () => {
  let component: CategorymobileComponent;
  let fixture: ComponentFixture<CategorymobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorymobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorymobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
