import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Inicializa con una cadena vacía
  password: string = ''; // Inicializa con una cadena vacía

  login() {
    if (this.username && this.password) {
      // Realizar lógica de autenticación aquí (puede ser una llamada a una API, etc.).
      // Si la autenticación es exitosa, puedes redirigir al usuario a la página principal.
    } else {
      // Mostrar un mensaje de error o manejar el caso de campos vacíos.
    }
  }
}
