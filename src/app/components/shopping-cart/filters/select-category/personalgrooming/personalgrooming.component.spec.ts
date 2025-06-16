import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalgroomingComponent } from './personalgrooming.component';

describe('PersonalgroomingComponent', () => {
  let component: PersonalgroomingComponent;
  let fixture: ComponentFixture<PersonalgroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalgroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalgroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
