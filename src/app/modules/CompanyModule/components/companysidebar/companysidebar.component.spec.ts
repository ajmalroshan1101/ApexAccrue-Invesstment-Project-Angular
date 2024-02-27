import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysidebarComponent } from './companysidebar.component';

describe('CompanysidebarComponent', () => {
  let component: CompanysidebarComponent;
  let fixture: ComponentFixture<CompanysidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanysidebarComponent]
    });
    fixture = TestBed.createComponent(CompanysidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
