import { Component } from '@angular/core';
import { ApiService } from '../../../shared/core/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css']
})
export class ObjetivosComponent {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { };
  
  objetivosSeteados: any[] = [];

  ngOnInit() {
    this.getAreas();
  };

  getAreas() {
    this.apiService.get('objetivos/show').subscribe(
      (res: any) => {

        for (const objetivo of res.data) {
          objetivo.fechaInicioObjetivo = objetivo.fechaInicioObjetivo.split("T")[0];
          objetivo.fechaFinObjetivo = objetivo.fechaFinObjetivo.split("T")[0];
          this.objetivosSeteados.push(objetivo);
        };
        console.log(this.objetivosSeteados);
        
      },
      (err) => {
        console.error(err);
      }
    );
  };

}
