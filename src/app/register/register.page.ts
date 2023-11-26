import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  formularioRegistro: FormGroup;
  nombreProfesor = '';
  tipoUsuario = '';

  constructor(
    private location: Location,
    private alertController: AlertController,
    private toastController: ToastController,
    private fb: FormBuilder,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeStorage(); // Llama a la función para inicializar el almacenamiento

    this.formularioRegistro = this.fb.group({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', Validators.required),
      tipoUsuario: new FormControl('', Validators.required)
    });
  }

  async initializeStorage() {
    await this.storage.create(); // Asegúrate de llamar a 'create()' para inicializar la base de datos
  }

  async guardar() {
    const f = this.formularioRegistro.value;
  
    if (this.formularioRegistro.invalid) {
      // Validación y mensaje de alerta
      return;
    }
  
    try {
      let usuariosString = await this.storage.get('usuarios');
      
      let usuarios: any[] = usuariosString ? JSON.parse(usuariosString) : [];
      console.log('Usuarios guardados:', usuarios);


      const tipoUsuario = f.tipoUsuario;
  
      const usuario = {
        id: usuarios.length + 1,
        nombre: f.nombre,
        correo: f.correo,
        contrasena: f.contrasena,
        tipoUsuario: tipoUsuario
      };
      console.log('Usuario a registrar:', usuario);
  
      usuarios.push(usuario);
  
      await this.storage.set('usuarios', JSON.stringify(usuarios));
  
      const toast = await this.toastController.create({
        message: 'Usuario registrado correctamente',
        duration: 2000,
        position: 'top',
      });
  
      await toast.present();
  
      this.formularioRegistro.reset();
  
      if (tipoUsuario === 'profesor') {
        let profesoresString = await this.storage.get('profesores');
        let profesores: any[] = profesoresString ? JSON.parse(profesoresString) : [];
        profesores.push(usuario);
        await this.storage.set('profesores', JSON.stringify(profesores));
        console.log('Usuarios Profesores:', profesores);
        this.router.navigate(['/inicio-profesor']);
      } else if (tipoUsuario === 'alumno') {
        let alumnosString = await this.storage.get('alumnos');
        let alumnos: any[] = alumnosString ? JSON.parse(alumnosString) : [];
        alumnos.push(usuario);
        await this.storage.set('alumnos', JSON.stringify(alumnos));
        this.router.navigate(['/datos-usuario']);
      } else {
        // Manejo del tipo de usuario desconocido
      }
    } catch (error) {
      console.error('Error almacenando usuarios:', error);
    }
  }
  
  

  goBack() {
    this.location.back();
  }
}
