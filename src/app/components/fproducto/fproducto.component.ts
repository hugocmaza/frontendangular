import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/servicios/libro';
import {LibrosService} from '../../servicios/libros.service';

@Component({
  selector: 'app-fproducto',
  templateUrl: './fproducto.component.html',
  styleUrls: ['./fproducto.component.css']
})
export class FproductoComponent implements OnInit {
  libros: Libro[] = [];
  libro: Libro = new Libro('','','',new Date());
  accion:string ="insertar";
  constructor(private librosservice: LibrosService) { }

  ngOnInit(): void {
    this.libros = this.librosservice.getLibros();
  }

  algo(){

  }
  guardar(){
    if(this.accion==="insertar"){
      this.librosservice.insertLibro(this.libro);
    }
    if(this.accion==="modificar"){
      this.librosservice.updateLibro2(this.libro);
      console.log(this.accion);
      this.accion="insertar";
    }


  }
  borrar(id:number){
    this.librosservice.deleteLibro(id);
  }
  modificar(id:number){
    this.libro = this.librosservice.updateLibro(id);

    this.accion="modificar";
  }

}
