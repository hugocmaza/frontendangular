import { Injectable } from '@angular/core';

import { Libro } from "../servicios/libro";
import { ILibro } from './ilibro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService implements ILibro {
  isbn: string;
  titulo: string;
  descripcion: string;
  fechaedicion: Date;
  fec: any = new Date('2020-12-20');
  libro: Libro = new Libro("","","",new Date());
  libros: Libro[] = [new Libro("1","ANGULAR1s","lo que sea", this.fec),
                      new Libro("2","ANGULAR2","lo que sea2",new Date()),
                      new Libro("3","ANGULAR3","lo que sea3",new Date()),
                    ]
  //[{"isbn"="1","titulo"="ANGULAR","Descripcion"="lo que sea",new Date()}];
  constructor(){
      this.isbn = "";
      this.titulo = "";
      this.descripcion = "";
      this.fechaedicion = new Date();

  }

  getLibrobyId(id: number): Libro {
    return this.libros[id];
  }
  getLibros(): Libro[] {
    return this.libros;
  }
  updateLibro(id:number): Libro {
    return this.libros[id];
  }

  updateLibro2(libro:Libro): Libro[] {
    let v=this.libros.findIndex(l => l.isbn === libro.isbn);
    this.libros[v]=libro;
    console.log(this.libros[v]);
    return this.libros;
  }

  insertLibro(libro: Libro): void {
    this.libros.push(libro);
  }
  deleteLibro(id:number): void {
    this.libros.splice(id,1);
  }


}
