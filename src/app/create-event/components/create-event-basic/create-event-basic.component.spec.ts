import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventBasicComponent } from './create-event-basic.component';

describe('CreateEventBasicComponent', () => {
  let component: CreateEventBasicComponent;
  let fixture: ComponentFixture<CreateEventBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
