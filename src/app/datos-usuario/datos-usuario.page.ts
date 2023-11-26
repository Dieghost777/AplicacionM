import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { QrCodeService } from '../qr-code.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.page.html',
  styleUrls: ['./datos-usuario.page.scss'],
})
export class DatosUsuarioPage {
  usuario: any = {};
  qrCodeSource: string = ''; // Variable para la fuente de la imagen del código QR
  menu: any;

  constructor(
    private location: Location,
    private alertController: AlertController,
    private qrCodeService: QrCodeService,
    private apiService: ApiService
  ) {
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString);
    }
  }

  goBack() {
    this.location.back();
  }

  generateAndDisplayQR() {
    this.qrCodeService.generateRandomQRCode().then((source: string) => {
      this.qrCodeSource = source;
    });

  }
  verMenu() {
    this.apiService.obtenerMenu().subscribe((data) => {
      this.menu = data;
      console.log(this.menu);
    });
  }
}

