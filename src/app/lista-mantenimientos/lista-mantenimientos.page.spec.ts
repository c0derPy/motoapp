import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMantenimientosPage } from './lista-mantenimientos.page';

describe('ListaMantenimientosPage', () => {
  let component: ListaMantenimientosPage;
  let fixture: ComponentFixture<ListaMantenimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMantenimientosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMantenimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
