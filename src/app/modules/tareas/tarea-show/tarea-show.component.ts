import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/core/api/api.service';

@Component({
  selector: 'app-tarea-show',
  templateUrl: './tarea-show.component.html',
  styleUrls: ['./tarea-show.component.css']
})


export class TareaShowComponent {

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  tareaID = {
    taskId: ''
  };

  dataTarea: any[] = []
  tareaSeteada: any[] = []
  tareaEmpleado: any[] = []
  tareaEvidencia: any[] = []

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tareaID.taskId = params['id'];

      this.apiService.post('tareas/show/tarea', this.tareaID).subscribe(
        (res: any) => {
          console.log(res);
          
          this.dataTarea = res;
          let tareaEncontrada = res.tarea;
          this.tareaEmpleado = res.empleados;
          this.tareaEvidencia = res.evidencias;
          
          for (const tarea of tareaEncontrada) {
            tarea.duracion = String(`${tarea.duracion}Hrs`);
            tarea.fin = tarea.fin.split("T")[0];
            tarea.inicio = tarea.inicio.split("T")[0];
            this.tareaSeteada.push(tarea);
          };
        },
        (err) => {
          console.error(err);
        }
      );
      
    });
  }
}
