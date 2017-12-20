import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventContactComponent } from './create-event-contact.component';

describe('CreateEventContactComponent', () => {
  let component: CreateEventContactComponent;
  let fixture: ComponentFixture<CreateEventContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
