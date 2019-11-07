import { Repuesto } from './repuesto.models'

export interface Mantenimiento{
	id: number;
	kilometraje: number;
	observaciones: string;
	valor_mano_obra: number;
	fecha:Date;
	repuestos:Repuesto;
}

export class Mantenimiento{
	id: number;
	kilometraje: number;
	observaciones: string;
	valor_mano_obra: number;
	fecha:Date;
	repuestos:Repuesto;

	constructor(datos: Mantenimiento){
		if(datos != null){
			this.id = datos.id;
			this.kilometraje = datos.kilometraje;
			this.observaciones = datos.observaciones;
			this.valor_mano_obra = datos.valor_mano_obra;
			this.fecha = datos.fecha;
			this.repuestos = datos.repuestos;
			return
		}
		this.id = this.id;
		this.kilometraje = this.kilometraje;
		this.observaciones = this.observaciones;
		this.valor_mano_obra = this.valor_mano_obra;
		this.fecha = this.fecha;
		this.repuestos = this.repuestos;
	}

}