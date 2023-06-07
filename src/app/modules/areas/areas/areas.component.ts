import { Component } from '@angular/core';
import { ApiService } from '../../../shared/core/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent {
  
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { };
  
  areasSeteadas: any[] = [];

  ngOnInit() {
    this.getAreas();
  };

  getAreas() {
    this.apiService.get('areas/show').subscribe(
      (res: any) => {

        for (const area of res.data) {
          area.fechaInicioArea = area.fechaInicioArea.split("T")[0];
          this.areasSeteadas.push(area);
        };
      },
      (err) => {
        console.error(err);
      }
    );
  };
  
}
