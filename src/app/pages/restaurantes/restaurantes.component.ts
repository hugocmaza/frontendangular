import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Irestaurantes } from 'src/app/servicios/irestaurantes';
import { SrestaurantesService } from 'src/app/servicios/srestaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  mensajes: any = [];
  // mensajes: MensajeDTO[] = [];
  restaurante: Irestaurantes = {id:0,nombre:"Ypf",direccion:"Chilecito",descripcion:"",imagen:"",precio:"",
                              categoria:"",url:""};

  constructor(private dataService: SrestaurantesService, private httpclient: HttpClient) {
  }

  ngOnInit(): void {
    // DE MANERA TRADICIONAL
    //this.dataService.getRestaurantes().subscribe((data: any) => {
      this.httpclient.get('http://localhost:8080/restaurantes').subscribe((datos: any) => {
      console.log(datos.data);
      this.mensajes = datos.data;
      // console.log(response.data);
      // this.mensajes = response.data;
    });
 /*   this.addRestaurante(this.restaurante)
      .subscribe(data => {
        console.log(data);

      });

    this.modRestaurante(this.restaurante)
      .subscribe(data => {
        console.log(data);

      });

      this.deleteRestaurante(19)
      .subscribe(data => {
        console.log(data);

      })

*/
  }

  baseURL: string = "http://localhost:8080/restaurantes";


 /* getRestaurantes2(): Observable<Irestaurantes[]> {
    console.log('getresto '+this.baseURL + 'resto')
    return this.httpclient.get<Irestaurantes[]>(this.baseURL)
  }*/

  addRestaurante(restaurante:Irestaurantes): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(restaurante);
    console.log(body)
    return this.httpclient.post(this.baseURL, body,{'headers':headers})
  }

  modRestaurante(restaurante:Irestaurantes): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(restaurante);
    console.log(body)
    return this.httpclient.put(this.baseURL+"/"+this.restaurante.id, body,{'headers':headers})
  }

  deleteRestaurante(id:number): Observable<any> {
    const headers = { 'content-type': 'application/json'}

    return this.httpclient.delete(this.baseURL+"/"+id,{'headers':headers})
  }

  escuchaClick(id: any) {
    console.log('Click en:', id);
  }


}
