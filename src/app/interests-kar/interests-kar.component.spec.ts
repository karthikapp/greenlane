import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsKarComponent } from './interests-kar.component';

describe('InterestsKarComponent', () => {
  let component: InterestsKarComponent;
  let fixture: ComponentFixture<InterestsKarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsKarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsKarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
