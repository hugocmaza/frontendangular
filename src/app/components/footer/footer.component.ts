import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fecha: Date = new Date();
  nombre: string = "HuGo Maza2";
  titulo: string = "footer";
  constructor() { }

  ngOnInit(): void {
  }

}
