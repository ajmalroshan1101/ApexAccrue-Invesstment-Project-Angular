import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonloginComponent } from './commonlogin.component';

describe('CommonloginComponent', () => {
  let component: CommonloginComponent;
  let fixture: ComponentFixture<CommonloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonloginComponent]
    });
    fixture = TestBed.createComponent(CommonloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
