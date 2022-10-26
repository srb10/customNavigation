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
  },
  {
    path: 'modal-content',
    loadChildren: () => import('./pages/modal-content/modal-content.module').then( m => m.ModalContentPageModule)
  },
  {
    path: 'modal-two',
    loadChildren: () => import('./pages/modal-two/modal-two.module').then( m => m.ModalTwoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
