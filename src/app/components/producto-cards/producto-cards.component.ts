import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/servicios/libro';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-cards',
  templateUrl: './producto-cards.component.html',
  styleUrls: ['./producto-cards.component.css']
})
export class ProductoCardsComponent implements OnInit {
  @Input() libro: Libro = new Libro("","","", new Date());
  @Input() indice: number=0;
  constructor(private router: Router, private location : Location) { }

  ngOnInit(): void {
  }

  navegarA(){
    console.log(this.indice);
    this.router.navigate(['/producto','id',this.indice]);
  }

  goBack(){
    this.location.back();
  }


}
