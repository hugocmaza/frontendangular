import { ILibro } from "./ilibro";
export class Libro implements ILibro {
  isbn: string;
  titulo: string;
  descripcion: string;
  fechaedicion: Date;
  constructor(
    isbn: string ,
    titulo: string,
    descripcion: string,
    fechaedicion: Date){
      this.isbn = isbn;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.fechaedicion = new Date();

  }

  getLibrobyId(): Libro {
    throw new Error("Method not implemented.");
  }
  getLibros(): Libro[] {
    throw new Error("Method not implemented.");
  }
  updateLibro(): Libro {
    throw new Error("Method not implemented.");
  }
  insertLibro(): string {
    throw new Error("Method not implemented.");
  }
  deleteLibro(): string {
    throw new Error("Method not implemented.");
  }

}
