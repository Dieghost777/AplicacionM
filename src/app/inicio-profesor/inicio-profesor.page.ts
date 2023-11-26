import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.page.html',
  styleUrls: ['./inicio-profesor.page.scss'],
})
export class InicioProfesorPage {
  profesor: any = {};
  storage: Storage | null = null;

  constructor(private router: Router,     private authService: AuthService
    ) {
    this.initializeStorage();
  }

  async initializeStorage() {
    this.storage = await new Storage().create();
  }

  async ionViewDidEnter() {
    await this.getProfesorDetails();
  }

  async getProfesorDetails() {
    const nombreDelProfesor = this.authService.getLoggedUserName(); // Reemplaza con la lógica para obtener el nombre del profesor logeado
    console.log('Nombre de usuario:', nombreDelProfesor);

    try {
      if (this.storage) {
        const profesoresString = await this.storage.get('profesores');
        console.log('Datos almacenados:', profesoresString);
        
        const profesores: any[] = profesoresString ? JSON.parse(profesoresString) : [];
      
        const profesorAutenticado = profesores.find(user => user.nombre === nombreDelProfesor);
      
        this.profesor = profesorAutenticado || {};
        console.log('Detalles del profesor:', this.profesor);
      } else {
        console.error('Storage no inicializado');
      }
    } catch (error) {
      console.error('Error al obtener los detalles del profesor:', error);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
