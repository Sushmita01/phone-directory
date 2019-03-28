import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactItemDetailsComponent } from './contact-item-details.component';

describe('ContactItemDetailsComponent', () => {
  let component: ContactItemDetailsComponent;
  let fixture: ComponentFixture<ContactItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
