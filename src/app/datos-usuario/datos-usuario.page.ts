import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { QrCodeService } from '../qr-code.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.page.html',
  styleUrls: ['./datos-usuario.page.scss'],
})
export class DatosUsuarioPage {
  usuario: any = {};
  qrCodeSource: string=''; // Variable para la fuente de la imagen del código QR

  constructor(
    private location: Location,
    private alertController: AlertController,
    private qrCodeService: QrCodeService
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
}