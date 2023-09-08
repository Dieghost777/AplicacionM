import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ForpassPageRoutingModule } from './forpass-routing.module';

import { ForpassPage } from './forpass.page'; // Asegúrate de que esté correcto

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForpassPageRoutingModule
  ],
  declarations: [ForpassPage], // Utiliza ForpassPage como componente
})
export class ForpassPageModule {}
