import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventuploadComponent } from './eventupload.component';

describe('EventuploadComponent', () => {
  let component: EventuploadComponent;
  let fixture: ComponentFixture<EventuploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventuploadComponent]
    });
    fixture = TestBed.createComponent(EventuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
