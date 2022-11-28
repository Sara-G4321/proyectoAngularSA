import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { AsideComponent } from './Componentes/aside/aside.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { QuienesSomosComponent } from './Componentes/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './Componentes/servicios/servicios.component';
import { TestimoniosComponent } from './Componentes/testimonios/testimonios.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';

//Rutas
const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'QuienesSomos', component: QuienesSomosComponent},
  {path: 'Servicios', component: ServiciosComponent},
  {path: 'Testimonios', component: TestimoniosComponent},
  {path: 'Contactos', component: ContactoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    InicioComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
