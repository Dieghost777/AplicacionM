import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formularioLogin: FormGroup;

  constructor(
    private alertController: AlertController,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.formularioLogin = this.fb.group({
      nombre: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required),
      tipoUsuario: new FormControl('', Validators.required) // Agrega el FormControl para el tipo de usuario
    });
  }

  async ingresar() {
    const f = this.formularioLogin.value;

    try {
      if (await this.authService.login(f.nombre, f.contrasena)) {
        const usuario = await this.authService.getUserByName(f.nombre);

        if (usuario) {
          if (f.tipoUsuario === 'alumno') {
            this.router.navigate(['/datos-usuario']);
          } else if (f.tipoUsuario === 'profesor') {
            const profesor = await this.authService.getProfesorDetails(f.nombre);

            if (profesor) {
              this.router.navigate(['/inicio-profesor']);
            } else {
              console.log('Detalles del profesor no encontrados.');
            }
          } else {
            console.log('Tipo de usuario desconocido.');
          }
        }
      } else {
        const alert = await this.alertController.create({
          message: 'Datos incorrectos y/o Usuario no encontrado.',
          buttons: ['OK'],
        });

        await alert.present();
        console.log('Credenciales incorrectas.');
      }
    } catch (error) {
      const alert = await this.alertController.create({
        message: 'Error al iniciar sesión.',
        buttons: ['OK'],
      });

      await alert.present();
      console.error('Error al iniciar sesión:', error);
    }
  }
  
  goBack() {
    this.router.navigate(['/']); 
  }
}
