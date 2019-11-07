import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from '../services/mantenimientos-services/mantenimientos.service'
import { Repuesto } from '../models/repuesto.models'
import { Mantenimiento } from '../models/mantenimiento.models'
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-crear-mantenimiento',
  templateUrl: './crear-mantenimiento.page.html',
  styleUrls: ['./crear-mantenimiento.page.scss'],
})
export class CrearMantenimientoPage implements OnInit {

  repuestos: Repuesto[] = new Array<Repuesto>();
  mantenimiento: Mantenimiento = new Mantenimiento(null);
  esEditable: boolean = false;

  constructor(private mantenimientoServicio: MantenimientosService, public loadingController: LoadingController, public toastController: ToastController,private state: ActivatedRoute) { }

  ngOnInit() {

    if(this.state.snapshot.params.editMantenimiento != undefined){
       this.mantenimiento = new Mantenimiento(JSON.parse(this.state.snapshot.params.editMantenimiento))
       this.esEditable = true
    }
  	this.mantenimientoServicio.getRepuestos().subscribe((listRepuestos)=>{
  		this.repuestos = listRepuestos
  	})
  }

  async registrarMantenimiento(){
    const loading = await this.loadingController.create({
      message: 'Registrando..'
    });
    await loading.present();

    this.mantenimientoServicio.addMantenimiento(this.mantenimiento).subscribe(()=>{
      this.mantenimiento = new Mantenimiento(null)
      loading.dismiss();
      this.showMensaje("Almacenado con exito!")
    },
    error=>{
      loading.dismiss();
      this.showMensaje('Error al registrar..intente de nuevo')
    })
  }

  async editarMantenimiento(){
    const loading = await this.loadingController.create({
      message: 'Actualizando...'
    });
    await loading.present();

    this.mantenimientoServicio.updMantenimiento(this.mantenimiento).subscribe(()=>{
      loading.dismiss();
      this.showMensaje("Almacenado con exito!")
    },
    error=>{
      loading.dismiss();
      this.showMensaje('Error al registrar..intente de nuevo')
    })
  }

  async showMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  compareFn(m: Mantenimiento, r: Repuesto): boolean {
    return m.id == r.id;
  }

}
