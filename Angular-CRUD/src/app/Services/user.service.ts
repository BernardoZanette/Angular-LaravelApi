import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserResponse {
  "identify": number 
  "name": string
  "email": string
  "created": string
  "updated": string
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  saveUser(inputData: object) {
    return this.httpClient.post(`http://127.0.0.1:8000/users`, inputData);
  }

  getUsers() {
    return this.httpClient.get(`http://127.0.0.1:8000/users`);
  }

  getUser(userId: any) {
    return this.httpClient.get(`http://127.0.0.1:8000/users/${userId}`);
  }

  updateUser(inputData:any, userId: any) {
    return this.httpClient.patch(`http://127.0.0.1:8000/users/${userId}`, inputData);
  }

  destroyUser(userId: any) {
    return this.httpClient.delete(`http://127.0.0.1:8000/users/${userId}`)
  }

}
