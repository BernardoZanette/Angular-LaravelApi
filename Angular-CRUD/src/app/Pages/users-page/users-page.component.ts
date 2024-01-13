import { Component } from '@angular/core';
import { UserResponse, UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../Partials/loader/loader.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoaderComponent
  ],
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {
  
  constructor(private userService: UserService) {}

  users!: UserResponse[];
  isLoading: boolean = false;

  // quando a página iniciar, chama a função getUserLists
  ngOnInit() { 
    this.getUserLists();
  }

  // faz a requisição para a API através do arquivo user.service.ts ou pela sua classe userService
  getUserLists(){

    this.isLoading = true;
    this.userService.getUsers().subscribe((res:any) => {
      console.log(res.data);
      this.users = res.data
      this.isLoading = false
    });
  }

  deleteUser(event:any, userId:Number) {
      
    if(confirm('Are you sure you want to delete this data ?')) {
      event.target.innerText = "Deleting..."

      this.userService.destroyUser(userId).subscribe((res:any) => {
        
        this.getUserLists()
        
      }) 
    }

  }

}
