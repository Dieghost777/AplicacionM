import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.page.html',
  styleUrls: ['./datos-usuario.page.scss'],
})
export class DatosUsuarioPage {
  usuario: any = {}; 
  menu: any;

  constructor(private location: Location, private alertController: AlertController, private apiService: ApiService) {
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString);
    }
  }

  goBack() {
    this.location.back();
  }

  verMenu() {
    this.apiService.obtenerMenu().subscribe((data) => {
      this.menu = data;
      console.log(this.menu);
    });
  }
}
