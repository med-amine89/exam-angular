import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor() { }

  localStorageFn(data){
    if(localStorage.getItem('users') == null){
      data.date = Date();
      data.id = 0;
      localStorage.setItem('users', JSON.stringify([data]))
    }
    else{
      let tab_users = JSON.parse(localStorage.getItem('users'));
      data.date = Date();
      data.id = tab_users.length;
      tab_users.push(data);
      localStorage.setItem('users',JSON.stringify(tab_users));
    }
  }

  storageData(){
    
    let post  = JSON.parse(localStorage.getItem('users'))
    return post

  }
   
}
