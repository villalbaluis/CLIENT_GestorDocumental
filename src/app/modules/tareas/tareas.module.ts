import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas/tareas.component';
import { TareaShowComponent } from './tarea-show/tarea-show.component';

@NgModule({
  declarations: [TareasComponent, TareaShowComponent],
  imports: [CommonModule],
})

export class TareasModule { }
