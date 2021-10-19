import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './componentes/comunes/page-not-found/page-not-found.component';
import { FproductoComponent } from './components/fproducto/fproducto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosComponent} from './components/productos/productos.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/id/:id', component: ProductoComponent },
  { path: 'fproducto', component: FproductoComponent },
  {
    path: 'comments',
    // loadChildren: './pages/comments/comments.module#CommentsModule'
    loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsModule)
   // component: CommentsComponent
  },
  {
  path: 'comentarios',
    // loadChildren: './pages/comments/comments.module#CommentsModule'
    loadChildren: () => import('./prueba/comentarios/comentarios.module').then(m => m.ComentariosModule)},
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
