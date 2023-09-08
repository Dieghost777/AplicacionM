import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(private location: Location, public fb: FormBuilder, public alertController: AlertController,private router: Router) {
    this.formularioLogin = this.fb.group({
      nombre: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async ingresar() {
    const f = this.formularioLogin.value;
    const usuarioString = localStorage.getItem('usuario');
    
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      
      if (usuario.nombre === f.nombre && usuario.contraseña === f.contraseña) {
        this.router.navigate(['/datos-usuario']);


      } else {
        const alert = await this.alertController.create({
          message: 'Datos incorrectos y/o Usuario no encontrado.',
          buttons: ['OK'],
        });
  
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        message: 'Usuario no encontrado.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  goBack() {
    this.location.back();
  }
}
