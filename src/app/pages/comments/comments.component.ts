import { Component, OnInit } from '@angular/core';
import { ScommentsService } from '../../servicios/scomments.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  mensajes: any = [];
  // mensajes: MensajeDTO[] = [];

  constructor(private dataService: ScommentsService) {
  }

  ngOnInit(): void {
    // DE MANERA TRADICIONAL
    this.dataService.getComments().subscribe((data: any) => {

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
