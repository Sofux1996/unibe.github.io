import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseComponent} from './base/base.component';
import {HomeComponent} from './home/home.component';
import {AdministracionComponent} from './administracion/administracion.component';
import {InscripcionComponent} from './inscripcion/inscripcion.component';
import {ContactComponent} from './contact/contact.component';
import {MatriculaComponent} from './matricula/matricula.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: BaseComponent.URL},


{path: BaseComponent.URL, component: BaseComponent,
  children:[
  {path: AdministracionComponent.URL, component: AdministracionComponent},
  {path: InscripcionComponent.URL, component: InscripcionComponent},
{path: ContactComponent.URL, component: ContactComponent},
{path: HomeComponent.URL, component: HomeComponent},
{path: MatriculaComponent.URL, component: MatriculaComponent}

  ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
