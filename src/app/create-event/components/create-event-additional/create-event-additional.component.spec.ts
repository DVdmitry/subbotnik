import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventAdditionalComponent } from './create-event-additional.component';

describe('CreateEventAdditionalComponent', () => {
  let component: CreateEventAdditionalComponent;
  let fixture: ComponentFixture<CreateEventAdditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventAdditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
