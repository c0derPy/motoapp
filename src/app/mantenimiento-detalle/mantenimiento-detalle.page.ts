import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Mantenimiento } from '../models/mantenimiento.models'
import { Router, Route } from '@angular/router'

@Component({
  selector: 'app-mantenimiento-detalle',
  templateUrl: './mantenimiento-detalle.page.html',
  styleUrls: ['./mantenimiento-detalle.page.scss'],
})
export class MantenimientoDetallePage implements OnInit {
  
  mantenimiento: Mantenimiento
  constructor(private state: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  	this.mantenimiento = JSON.parse(this.state.snapshot.params.mantenimiento)
  }

  editarMantenimiento(mantenimiento: Mantenimiento){
   this.route.navigate(['crear-mantenimiento', {editMantenimiento: JSON.stringify(mantenimiento)}])
  }

}
