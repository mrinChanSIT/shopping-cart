import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationItemsComponent } from './decoration-items.component';

describe('DecorationItemsComponent', () => {
  let component: DecorationItemsComponent;
  let fixture: ComponentFixture<DecorationItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorationItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
