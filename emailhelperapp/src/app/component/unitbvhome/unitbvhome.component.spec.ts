import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitbvhomeComponent } from './unitbvhome.component';

describe('UnitbvhomeComponent', () => {
  let component: UnitbvhomeComponent;
  let fixture: ComponentFixture<UnitbvhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitbvhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitbvhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
