import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeapplianceComponent } from './homeappliance.component';

describe('HomeapplianceComponent', () => {
  let component: HomeapplianceComponent;
  let fixture: ComponentFixture<HomeapplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeapplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeapplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
