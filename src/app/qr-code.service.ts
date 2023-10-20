import * as QRCode from 'qrcode';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  generateRandomQRCode(): Promise<string> {
    // Genera datos aleatorios (en este caso, una cadena aleatoria)
    const randomData = Math.random().toString(36).substring(7);

    return new Promise<string>((resolve, reject) => {
      QRCode.toDataURL(randomData, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }
}