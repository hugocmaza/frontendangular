import { Component, OnInit } from '@angular/core';
import { SrestaurantesService } from 'src/app/servicios/srestaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  mensajes: any = [];
  // mensajes: MensajeDTO[] = [];

  constructor(private dataService: SrestaurantesService) {
  }

  ngOnInit(): void {
    // DE MANERA TRADICIONAL
    this.dataService.getRestaurantes().subscribe((data: any) => {

      console.log(data);
      this.mensajes = data;
      // console.log(response.data);
      // this.mensajes = response.data;
    });
  }

  escuchaClick(id: any) {
    console.log('Click en:', id);
  }


}
