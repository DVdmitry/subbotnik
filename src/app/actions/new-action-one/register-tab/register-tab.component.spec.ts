import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTabComponent } from './register-tab.component';

describe('RegisterTabComponent', () => {
  let component: RegisterTabComponent;
  let fixture: ComponentFixture<RegisterTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
