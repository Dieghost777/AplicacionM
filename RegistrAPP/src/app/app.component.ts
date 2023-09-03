import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username: string = ''; // Propiedad para almacenar el nombre de usuario
  password: string = ''; // Propiedad para almacenar la contraseña

  constructor() {}

  // Método para manejar el inicio de sesión
  login() {
    // Aquí puedes agregar la lógica para iniciar sesión
    console.log('Iniciar Sesión:', this.username, this.password);
  }

  // Método para manejar la recuperación de contraseña
  forgotPassword() {
    // Aquí puedes agregar la lógica para recuperar contraseña
    console.log('Recuperar Contraseña');
  }

  // Método para manejar el registro de usuario
  register() {
    // Aquí puedes agregar la lógica para el registro de usuario
    console.log('Registrar Usuario');
  }
}
