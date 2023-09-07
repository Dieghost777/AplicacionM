import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
<<<<<<< HEAD
    path: 'forpass',
    loadChildren: () => import('./forpass/forpass.module').then( m => m.ForpassPageModule)
=======
    path: 'datos-usuario',
    loadChildren: () => import('./datos-usuario/datos-usuario.module').then( m => m.DatosUsuarioPageModule)
>>>>>>> 209b5ff0d9d3015c6c7f8169023ec140427b7c7a
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
