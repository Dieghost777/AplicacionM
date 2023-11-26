import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

// profesor.service.ts
@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async saveProfesor(profesor: any): Promise<void> {
    try {
      let profesoresString = await this.storage.get('profesores');
      let profesores: any[] = profesoresString ? JSON.parse(profesoresString) : [];

      console.log('Profesores existentes:', profesores);

      profesores.push(profesor);

      await this.storage.set('profesores', JSON.stringify(profesores));

      console.log('Profesor guardado correctamente:', profesor);
    } catch (error) {
      console.error('Error al guardar el profesor:', error);
    }
  }

  async getProfesorDetails(username: string): Promise<any | null> {
    try {
      const profesoresString = await this.storage.get('profesores');
      const profesores: any[] = profesoresString ? JSON.parse(profesoresString) : [];
  
      const profesorAutenticado = profesores.find(user => user.nombre === username);
  
      return profesorAutenticado || null;
    } catch (error) {
      console.error('Error al obtener los detalles del profesor:', error);
      return null;
    }
  }
  
  
}
