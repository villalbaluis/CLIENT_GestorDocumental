import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { TareasComponent } from './modules/tareas/tareas/tareas.component';
import { TareaShowComponent } from './modules/tareas/tarea-show/tarea-show.component';
import { AreasComponent } from './modules/areas/areas/areas.component';
import { ObjetivosComponent } from './modules/objetivos/objetivos/objetivos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'tareas/:id', component: TareaShowComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'objetivos', component: ObjetivosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
