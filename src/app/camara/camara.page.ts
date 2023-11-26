import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrowserMultiFormatReader, Result } from '@zxing/library';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit, OnDestroy {
  decodedText: string = '';
  codeReader: BrowserMultiFormatReader = new BrowserMultiFormatReader(); 

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.codeReader.reset();
  }

  scan() {
    this.codeReader
      .decodeFromInputVideoDevice(undefined, 'video')
      .then((result: Result) => {
        this.decodedText = result.getText();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
