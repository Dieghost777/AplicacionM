import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forpass',
  templateUrl: './forpass.page.html',
  styleUrls: ['./forpass.page.scss'],
})
export class ForpassPage {
  correo!: string; // Marcar como "definitivamente asignada"

  constructor(private location: Location) {}

  verificarCorreo() {
    // Obtener la lista de usuarios registrados del localStorage
    const usuariosRegistradosString = localStorage.getItem('usuarios');
    const usuariosRegistrados = usuariosRegistradosString ? JSON.parse(usuariosRegistradosString) : {};

    // Verificar si el correo ingresado existe en la lista de usuarios
    if (usuariosRegistrados[this.correo]) {
      // El correo existe en la lista de usuarios registrados
      console.log('Correo registrado');
      // Aquí puedes tomar medidas como enviar un correo de restablecimiento de contraseña
    } else {
      // El correo no existe en la lista de usuarios registrados
      console.log('Correo no registrado');
      // Aquí puedes mostrar un mensaje al usuario indicando que el correo no está registrado
    }
  }

  goBack() {
    this.location.back();
  }
}