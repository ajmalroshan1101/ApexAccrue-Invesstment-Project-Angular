import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyplansectionComponent } from './companyplansection.component';

describe('CompanyplansectionComponent', () => {
  let component: CompanyplansectionComponent;
  let fixture: ComponentFixture<CompanyplansectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyplansectionComponent]
    });
    fixture = TestBed.createComponent(CompanyplansectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
