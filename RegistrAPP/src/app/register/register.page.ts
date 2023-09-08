import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  formularioRegistro!: FormGroup;

  constructor(
    private location: Location,
    private alertController: AlertController,
    private toastController: ToastController,
    private fb: FormBuilder ,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl('', Validators.required),
    });
  }

  async guardar() {
    var f = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        message: 'Por favor, completa correctamente el formulario.',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }else{

      this.router.navigate(['/login']);

    }

    var usuario = {
      nombre: f.nombre,
      correo: f.correo,
      contraseña: f.contraseña,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    const toast = await this.toastController.create({
      message: 'Usuario creado correctamente',
      duration: 2000, 
      position: 'top', 

    });

    await toast.present();

    this.formularioRegistro.reset();
  }

  goBack() {
    this.location.back();
  }
}
