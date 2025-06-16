import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicItemsComponent } from './electronic-items.component';

describe('ElectronicItemsComponent', () => {
  let component: ElectronicItemsComponent;
  let fixture: ComponentFixture<ElectronicItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
