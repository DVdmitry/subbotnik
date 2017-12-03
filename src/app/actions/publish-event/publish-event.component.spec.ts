import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishEventComponent } from './publish-event.component';

describe('PublishEventComponent', () => {
  let component: PublishEventComponent;
  let fixture: ComponentFixture<PublishEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
