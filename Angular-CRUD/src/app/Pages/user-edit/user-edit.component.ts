import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../Partials/loader/loader.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    LoaderComponent,
    RouterModule
  ],
})
export class UserEditComponent {

  userId!: any;
  user!: any;


  loadingTitle: string = 'Loading'
  isLoading: boolean = false;
  errors: any = [];

  constructor(private route: ActivatedRoute, private userService: UserService) {} 

  ngOnInit() {
    
    this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.userId)
    this.isLoading = true

    this.userService.getUser(this.userId).subscribe((res:any) => {
      console.log(res)
      this.user = res.data
      this.isLoading = false
    })

  }
  
  redirect (url : any, asLink = true){
    asLink ? (window.location.href = url) : window.location.replace(url);
  }

  updateUser() {
    
    var inputData = {
      name: this.user.name,
      email: this.user.email
    }

    this.isLoading = true;

    this.userService.updateUser(inputData, this.userId).subscribe({
      next: (res:any) => {
        console.log(res.data)
        this.redirect('http://localhost:4200/users');
        
      },
      error: (err:any) => {
        console.log(err)
        this.errors = err.error.errors;
        this.isLoading = false
      }
    })
  }

  
}
