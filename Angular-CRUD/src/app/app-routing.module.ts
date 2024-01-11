import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { UsersPageComponent } from './Pages/users-page/users-page.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, title:'Home Page'},
  {path: 'about-us', component: AboutPageComponent, title:'About Us'},
  {path: 'contact-us', component: ContactPageComponent, title:'Contact Us'},
  {path: 'users/create', component: UserCreateComponent, title:'User Create'},
  {path: 'users', component: UsersPageComponent, title:'User Lists'},
  {path: 'users/:id/edit', component: UserEditComponent, title:'User Edit'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
