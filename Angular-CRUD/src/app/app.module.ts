import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { UsersPageComponent } from './Pages/users-page/users-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NavbarComponent,
    HttpClientModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
