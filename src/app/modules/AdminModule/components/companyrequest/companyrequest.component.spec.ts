import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyrequestComponent } from './companyrequest.component';

describe('CompanyrequestComponent', () => {
  let component: CompanyrequestComponent;
  let fixture: ComponentFixture<CompanyrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyrequestComponent]
    });
    fixture = TestBed.createComponent(CompanyrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
