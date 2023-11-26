import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { QrCodeService } from '../qr-code.service';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service'; // Importa el AuthService si aún no está importado

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.page.html',
  styleUrls: ['./datos-usuario.page.scss'],
})
export class DatosUsuarioPage {
  usuario: any = {};
  qrCodeSource: string = ''; // Variable para la fuente de la imagen del código QR
  menu: any;
  alumno: any; // Agrega la variable para almacenar los datos del alumno

  constructor(
    private location: Location,
    private alertController: AlertController,
    private qrCodeService: QrCodeService,
    private apiService: ApiService,
    private authService: AuthService // Agrega el servicio de autenticación
  ) {
    this.loadUserData();
  }

  async loadUserData() {
    const username = this.authService.getLoggedUserName();
    console.log('Username:', username);

    if (username) {
      this.alumno = await this.authService.getAlumnoDetails(username);
      console.log('Alumno:', this.alumno);
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
      console.log('Menu:', this.menu);
    });
  }
}
