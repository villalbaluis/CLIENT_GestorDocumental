import { Component } from '@angular/core';
import { ApiService } from '../../../shared/core/api/api.service';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface ApiResponse {
  data: {
    ok: boolean, 
    status: number, 
    data: any;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthServiceService
  ) { };

  loginData = {
    user: '',
    pass: ''
  };

  login() {
    this.apiService.post('auth/user/login', this.loginData).subscribe(
      (res: any) => {

        let datosEmpleado = res.data.datosEmpleado;
        let datosRolEmpleado = res.data.datosRol[0];
        let datosAreaEmpleado = res.data.datosArea[0];
        
        if (datosEmpleado) {
          // const token = datosEmpleado;        
          // const decodedToken = this.authService.decodeJwt(token);
          // this.authService.userData = decodedToken;
          // datosEmpleado =
          Object.assign(datosEmpleado, datosRolEmpleado, datosAreaEmpleado);          
          this.authService.userData = datosEmpleado;
          this.router.navigate(['/profile']);

          localStorage.setItem('userData', JSON.stringify(this.authService.userData));
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Validación incompleta',
            text: `Por favor, valida tus credenciales para inicio de sesión.`
          });
        };      
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error en servidor',
          text: `Ocurrió un error en el servidor al intentar iniciar sesión, lo sentimos, error: ${err}`
        });
      }
    );
  };

  


};
