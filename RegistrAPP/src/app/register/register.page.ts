import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formularioRegistro!: FormGroup; 

  constructor(private location: Location, private alertController: AlertController) {}

  ngOnInit(): void {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl('', Validators.required),
    });
  }

  async guardar() {
    var f= this.formularioRegistro.value;
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        message: 'Porfavor Rellena correctamente el Formulario.',
        buttons: ['OK'],
      });

      await alert.present();
      return
    }
    var usuario = {
      nombre: f.nombre,
      correo: f.correo,
      contraseña: f.contraseña
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
    
  goBack() {
    this.location.back();
  }
}
