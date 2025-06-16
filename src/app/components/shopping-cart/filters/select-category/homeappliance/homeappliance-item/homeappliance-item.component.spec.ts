import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeapplianceItemComponent } from './homeappliance-item.component';

describe('HomeapplianceItemComponent', () => {
  let component: HomeapplianceItemComponent;
  let fixture: ComponentFixture<HomeapplianceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeapplianceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeapplianceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
