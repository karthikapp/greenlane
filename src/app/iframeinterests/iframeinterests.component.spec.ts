import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeinterestsComponent } from './iframeinterests.component';

describe('IframeinterestsComponent', () => {
  let component: IframeinterestsComponent;
  let fixture: ComponentFixture<IframeinterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeinterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeinterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
