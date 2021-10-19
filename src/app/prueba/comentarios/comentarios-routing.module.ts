import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsRoutingModule } from 'src/app/pages/comments/comments-routing.module';
import { ComentariosComponent } from './comentarios.component';

const routes: Routes = [
  {path:'',
component: ComentariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentariosRoutingModule { }
