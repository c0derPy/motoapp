import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMantenimientoPage } from './crear-mantenimiento.page';

describe('CrearMantenimientoPage', () => {
  let component: CrearMantenimientoPage;
  let fixture: ComponentFixture<CrearMantenimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMantenimientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMantenimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
