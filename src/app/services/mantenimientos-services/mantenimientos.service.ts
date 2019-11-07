import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Mantenimiento } from 'src/app/models/mantenimiento.models'
import { Repuesto } from 'src/app/models/repuesto.models'
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {

  constructor(public http: HttpClient) {}

  getMantenimientos(): Observable<Mantenimiento[]>{
  	return this.http.get<Mantenimiento[]>("https://motoappi.herokuapp.com/api/mantenimientos");
  }

  getRepuestos(): Observable<Repuesto[]>{
  	return this.http.get<Repuesto[]>("https://motoappi.herokuapp.com/api/repuestos");
  }

  addMantenimiento(mantenimiento: Mantenimiento): Observable<boolean>{
  	return this.http.post<boolean>("https://motoappi.herokuapp.com/api/mantenimientos", mantenimiento);
  }

  updMantenimiento(mantenimiento: Mantenimiento): Observable<boolean>{
    return this.http.put<boolean>("https://motoappi.herokuapp.com/api/mantenimientos/"+mantenimiento.id, mantenimiento);
  }

}
