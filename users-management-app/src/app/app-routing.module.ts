import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ListAllUsersComponent } from './pages/list-all-users/list-all-users.component';

const routes: Routes = [
{ path: '', component: CreateUserComponent},
{ path: 'users', component: ListAllUsersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
