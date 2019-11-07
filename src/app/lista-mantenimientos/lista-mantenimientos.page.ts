import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from '../services/mantenimientos-services/mantenimientos.service'
import { Mantenimiento } from '../models/mantenimiento.models'
import { Router, Route } from '@angular/router'

@Component({
  selector: 'app-lista-mantenimientos',
  templateUrl: './lista-mantenimientos.page.html',
  styleUrls: ['./lista-mantenimientos.page.scss'],
})
export class ListaMantenimientosPage implements OnInit {

  mantenimientos: Mantenimiento[];

  constructor(private mantenimientosService: MantenimientosService, private route: Router) { }

  ngOnInit() {
  	this.allMantenimientos()
  }

  allMantenimientos(){
    this.mantenimientosService.getMantenimientos().subscribe((data)=>{
      this.mantenimientos = data;
    }, (error)=>{
      console.log(error)
    })
  }

  getMantenimiento(mantenimiento: Mantenimiento){
    this.route.navigate(['mantenimiento-detalle', {mantenimiento:JSON.stringify(mantenimiento)}])
  }

  crearMantenimiento(){
   this.route.navigate(['crear-mantenimiento'])
  }

  refrescar(event) {
    this.allMantenimientos()
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
