import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventEditComponent } from './create-event-edit.component';

describe('CreateEventEditComponent', () => {
  let component: CreateEventEditComponent;
  let fixture: ComponentFixture<CreateEventEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
