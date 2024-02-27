import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyheadComponent } from './companyhead.component';

describe('CompanyheadComponent', () => {
  let component: CompanyheadComponent;
  let fixture: ComponentFixture<CompanyheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyheadComponent]
    });
    fixture = TestBed.createComponent(CompanyheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
