import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/servicios/libro';
import { LibrosService } from 'src/app/servicios/libros.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  libros: Libro[];

  constructor(libroService: LibrosService, private router: Router) {
    this.libros = libroService.getLibros();

  }

  ngOnInit(): void {
  }

  navegarA(id: number){
    this.router.navigate(["/producto","id",id]);
  }



}
