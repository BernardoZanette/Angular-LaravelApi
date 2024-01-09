import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  
  constructor(private userService: UserService) {}

  name!:string
  email!:string
  password!:string
  errors: any = [];

  
  saveUser() {

    var inputData = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    this.userService.saveUser(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.data.message)
        this.name = ''
        this.email = ''
        this.password = ''
      },
      error: (err: any) => {
        this.errors = err.error.errors
        console.log(err.error.errors, 'errors')
      }
    })

  }

}
