import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }
  private users = ['Alice', 'Bob', 'Charlie'];
  getUsers(){
    return ['a','b']
  }
  getListUsers():Observable<String[]>{
    return of(this.users)
  }
}
