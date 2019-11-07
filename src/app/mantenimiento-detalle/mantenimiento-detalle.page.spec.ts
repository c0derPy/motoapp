import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDetallePage } from './mantenimiento-detalle.page';

describe('MantenimientoDetallePage', () => {
  let component: MantenimientoDetallePage;
  let fixture: ComponentFixture<MantenimientoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
