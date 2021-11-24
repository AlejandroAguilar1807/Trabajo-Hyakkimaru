import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioCuerpoComponent } from './components/formulario-cuerpo/formulario-cuerpo.component';
import { HttpClientModule } from '@angular/common/http';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { FormularioArticuloComponent } from './components/formulario-articulo/formulario-articulo.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { FormularioDemonioComponent } from './components/formulario-demonio/formulario-demonio.component';
import { DemonioComponent } from './components/demonio/demonio.component';
import { FormularioPeleaComponent } from './components/formulario-pelea/formulario-pelea.component';
import { PeleaComponent } from './components/pelea/pelea.component';

const router:Routes=[
  {path:'main',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'cuerpo',component:CuerpoComponent},
  {path:'formCuerpo',component:FormularioCuerpoComponent},
  {path:'formCuerpo/:id',component:FormularioCuerpoComponent},
  {path:'articulo',component:ArticuloComponent},
  {path:'formArticulo',component:FormularioArticuloComponent},
  {path:'formArticulo/:id',component:FormularioArticuloComponent},
  {path:'demonio',component:DemonioComponent},
  {path:'formDemonio',component:FormularioDemonioComponent},
  {path:'formDemonio/:id',component:FormularioDemonioComponent},
  {path:'pelea',component:PeleaComponent},
  {path:'formPelea',component:FormularioPeleaComponent},
  {path:'formPelea/:id',component:FormularioPeleaComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    AboutComponent,
    FooterComponent,
    FormularioCuerpoComponent,
    CuerpoComponent,
    FormularioArticuloComponent,
    ArticuloComponent,
    FormularioDemonioComponent,
    DemonioComponent,
    FormularioPeleaComponent,
    PeleaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
