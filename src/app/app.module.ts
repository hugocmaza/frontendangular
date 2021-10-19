import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PageNotFoundComponent } from './componentes/comunes/page-not-found/page-not-found.component';
import { LibrosService } from './servicios/libros.service';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoCardsComponent } from './components/producto-cards/producto-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FproductoComponent } from './components/fproducto/fproducto.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductosComponent,
    PageNotFoundComponent,
    ProductoComponent,
    ProductoCardsComponent,
    FproductoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
