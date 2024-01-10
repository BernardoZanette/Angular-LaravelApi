import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../Partials/loader/loader.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    LoaderComponent,
    RouterModule
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})

export class UserCreateComponent {
  
  constructor(private userService: UserService) {}

  name!:string
  email!:string
  password!:string

  loadingTitle: string = 'Loading'
  isLoading: boolean = false;
  errors: any = [];
  
  saveUser() {

    this.isLoading = true;
    this.loadingTitle = 'Saving'
    var inputData = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    this.userService.saveUser(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        this.isLoading = false;
        alert(res.data.message)
        this.name = ''
        this.email = ''
        this.password = ''
      },
      error: (err: any) => {
        this.errors = err.error.errors
        this.isLoading = false;
        console.log(err.error.errors, 'errors')
      }
    })

  }

}
