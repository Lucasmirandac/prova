import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerCrudComponent } from './manufacturer-crud.component';

describe('ManufacturerCrudComponent', () => {
  let component: ManufacturerCrudComponent;
  let fixture: ComponentFixture<ManufacturerCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturerCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
