import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any;


  constructor() { }
  // methode localstorage service

  localStorageFn(data) {
    if (localStorage.getItem('users') == null) {
      data.date = Date();
      data.id = 1;
      localStorage.setItem('users', JSON.stringify([data]))
    }
    else {
      let tab_users = JSON.parse(localStorage.getItem('users'));
      data.date = Date();
      data.id = tab_users.length;
      tab_users.push(data);
      localStorage.setItem('users', JSON.stringify(tab_users));
    }
  }

  // recuperation des donnees localstorage dans list component
  storageData() {

    let post = JSON.parse(localStorage.getItem('users'));
    return post
  }

  // service delete
  delete(i: any) {

    let user = JSON.parse(localStorage.getItem('users'))
    user.splice(i, 1);
    localStorage.setItem('users', JSON.stringify(user))
  }
  // service update

  Updateservice(post1, post2) {
    let users = JSON.parse(localStorage.getItem('users'));
    users[post1] = post2;
    localStorage.setItem('users', JSON.stringify(users));
  }
}

