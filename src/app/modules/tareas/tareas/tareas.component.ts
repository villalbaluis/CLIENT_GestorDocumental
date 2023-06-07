import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/core/api/api.service';
import { TareaShowComponent } from '../tarea-show/tarea-show.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tareas: any[] = [];
  tareaSeteadas: any[] = [];

  estadosTareas: any[] = [
    {valor: "Pendiente", id: 1},
    {valor: "En revisión", id: 2},
    {valor: "Terminada", id: 3},
    {valor: "En progreso", id: 4}
  ];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTareas();
  }

  getTareas() {
    this.apiService.get('tareas/show').subscribe(
      (res: any) => {
        this.tareas = res.data;
        for (const tarea of this.tareas) {
          tarea.duracion = String(`${tarea.duracion}Hrs`);
          tarea.fechaFinTarea = tarea.fechaFinTarea.split("T")[0];
          tarea.fechaInicioTarea = tarea.fechaInicioTarea.split("T")[0];
          tarea.porcentajeCumplimiento = tarea.porcentajeCumplimiento == null ? "0%" : `${tarea.porcentajeCumplimiento}%`;
          const estadoEncontrado = this.estadosTareas.find(estado => estado.id == tarea.idEstado);
          if (estadoEncontrado) {
            tarea.idEstado = estadoEncontrado.valor;
          } else {
            tarea.idEstado = "Sin estado definido";
          };
          this.tareaSeteadas.push(tarea);
        };
      },
      (err) => {
        console.error(err);
      }
    );
  };

  verTarea(id: number) {
    this.router.navigate(['/tareas', id]);
  }

};
