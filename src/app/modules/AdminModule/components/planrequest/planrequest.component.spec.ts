import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanrequestComponent } from './planrequest.component';

describe('PlanrequestComponent', () => {
  let component: PlanrequestComponent;
  let fixture: ComponentFixture<PlanrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanrequestComponent]
    });
    fixture = TestBed.createComponent(PlanrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
