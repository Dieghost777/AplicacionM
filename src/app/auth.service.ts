import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private loggedUserName: string | null = null; // Variable para almacenar el nombre del usuario autenticado

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async getAlumnoDetails(username: string): Promise<any | null> {
    try {
      const alumnosString = await this.storage.get('alumnos');
      const alumnos: any[] = alumnosString ? JSON.parse(alumnosString) : [];
  
      const alumnoDetails = alumnos.find(alumno => alumno.nombre === username);
  
      return alumnoDetails || null;
    } catch (error) {
      console.error('Error al obtener los detalles del alumno:', error);
      return null;
    }
  }

  async getUserByName(username: string): Promise<any | null> {
    try {
      const usuariosString = await this.storage.get('usuarios');
      const usuarios: any[] = usuariosString ? JSON.parse(usuariosString) : [];

      return usuarios.find(user => user.nombre === username) || null;
    } catch (error) {
      console.error('Error al obtener usuario por nombre:', error);
      return null;
    }
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      const usuario = await this.getUserByName(username);

      if (usuario && usuario.contrasena === password) {
        this.isLoggedIn = true;
        this.loggedUserName = username; // Almacena el nombre del usuario autenticado
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      return false;
    }
  }

  // Método para obtener el nombre del usuario autenticado
  getLoggedUserName(): string | null {
    return this.loggedUserName;
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

  logout(): void {
    this.isLoggedIn = false;
    this.loggedUserName = null; // Limpiar el nombre del usuario al cerrar sesión
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
