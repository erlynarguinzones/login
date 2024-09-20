import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailComponent,
  },
  {
    path: 'userDetail/:id',
    component: UserDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailRoutingModule {}
