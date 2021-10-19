import { Libro } from "./libro";

export interface ILibro {
  isbn: string;
  titulo: string;
  descripcion: string;
  fechaedicion: Date;

  getLibrobyId(id:number): Libro;
  getLibros(): Libro[];
  updateLibro(id: number): Libro;
  insertLibro(libro: Libro): void;
  deleteLibro(id: number): void;

}
