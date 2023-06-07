import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';
import { ApiService } from '../../shared/core/api/api.service';
import { TareasComponent } from '../tareas/tareas/tareas.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(
    public authService: AuthServiceService,
    private apiService: ApiService,
    private router: Router
  ) { }

  userData: any;
  esJefe: boolean = false;
  fechaLogin: string = '';

  storedUserData: any = localStorage.getItem('userData');

  fieldsUpdateEmpleado = {
    nombreEmpleado: '',
    direccionEmpleado: '',
    telefonoEmpleado: '',
    correo: '',
    idEmpleado: ''
  };

  empleadoLogout = {
    idEmpleado: ''
  };

  ngOnInit() {
    if (this.storedUserData) {
      this.userData = JSON.parse(this.storedUserData);
      if (this.userData.rol === 'Gerente' || this.userData.rol === 'Jefe') {
        this.esJefe = true;
      };
    } else {
      this.router.navigate(['/login']);
    };
  }

  updateEmpleado() {
    this.fieldsUpdateEmpleado.idEmpleado = this.userData.idEmpleado;
    this.apiService.post('auth/user/updateUser', this.fieldsUpdateEmpleado).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El perfil se ha actualizado con éxito',
          showConfirmButton: false,
          timer: 2500
        })
        // this.authService.logout();
        this.router.navigate(['/tareas']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error en servidor',
          text: `Ocurrió un error en el servidor al intentar actualizar la información del usuario, lo sentimos, error: ${err}`
        });
      }
    );
  };

  logout() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {

      this.userData = JSON.parse(storedUserData);
      this.empleadoLogout.idEmpleado = this.userData.idEmpleado;

      this.apiService.post('auth/user/logout', this.empleadoLogout).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error en servidor',
            text: `Ocurrió un error intentando cerrar la sesión, lo sentimos, error: ${err}`
          });
        }
      )
    }
    this.authService.logout();
    this.router.navigate(['/']);
  };


  redirectToTareas() {
    this.router.navigate(['/tareas']);
  }

};
