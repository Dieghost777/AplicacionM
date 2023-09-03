import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar 'Router' desde '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Inicializado aquí
  password: string = ''; // Inicializado aquí

  constructor(private router: Router) {} // Inyecta 'Router' en el constructor

  login() {
    // Verificar si el usuario y la contraseña son "admin"
    if (this.username === 'admin' && this.password === 'admin') {
      // Verificar si el usuario es administrador (puedes agregar más lógica aquí)
      // Si es administrador, redirige a la página de inicio
      this.router.navigate(['/inicio']); // Redirige a la página 'inicio'
    } else {
      // Mostrar un mensaje de error o realizar alguna otra acción si la autenticación falla
    }
  }

  forgotPassword() {
    // Lógica para la recuperación de contraseña
    // Esto podría implicar enviar un correo electrónico o un código de recuperación
    console.log('¿Olvidaste tu contraseña?');
  }

  register() {
    // Lógica para el registro de usuario
    // Esto podría implicar enviar datos al servidor para crear una cuenta
    console.log('Registrarse como nuevo usuario');
  }
}
