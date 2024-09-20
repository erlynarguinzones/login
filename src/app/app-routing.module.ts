import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { redirectGuard } from './guards/redirect.guard.spec';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./access/access.module').then((m) => m.AccessModule),
    canActivate: [redirectGuard],
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [authGuard],
  },
  {
    path: 'userDetail/:id',
    loadChildren: () =>
      import('./user-detail/user-detail.module').then(
        (m) => m.UserDetailModule
      ),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
