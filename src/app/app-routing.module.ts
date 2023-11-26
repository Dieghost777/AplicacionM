import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Importa el guardia de autenticación

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'datos-usuario',
    loadChildren: () => import('./datos-usuario/datos-usuario.module').then( m => m.DatosUsuarioPageModule),
    canActivate: [AuthGuard], // Aplica el guardia a esta ruta
  },
  {
    path: 'inicio-profesor',
    loadChildren: () => import('./inicio-profesor/inicio-profesor.module').then( m => m.InicioProfesorPageModule),
    canActivate: [AuthGuard], // Aplica el guardia a esta ruta
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forpass',
    loadChildren: () => import('./forpass/forpass.module').then( m => m.ForpassPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },
  {
    path: 'page404',
    loadChildren: () => import('./page404/page404.module').then( m => m.Page404PageModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/page404' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
