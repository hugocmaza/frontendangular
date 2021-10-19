import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/servicios/libro';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  [x: string]: any;
  libro: Libro = new Libro("","","", new Date());

  constructor(activateRoute: ActivatedRoute, libroService: LibrosService, private location: Location) {
      activateRoute.params.subscribe(
        x=>{
          console.log(x.id);
          this.libro = libroService.getLibrobyId(x.id-1);
        }
      );

   }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
