import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/home/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/home/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./modules/clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'rutinas',
    loadChildren: () => import('./modules/rutinas/rutinas.module').then( m => m.RutinasPageModule)
  },
  {
    path: 'instructores',
    loadChildren: () => import('./modules/instructores/instructores.module').then( m => m.InstructoresPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./modules/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./modules/herramientas/herramientas.module').then( m => m.HerramientasPageModule)
  },
  {
    path: 'gym',
    loadChildren: () => import('./modules/gym/gym.module').then( m => m.GymPageModule)
  },  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then( m => m.UserPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
