import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {




  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  users = this._authService.storageData();

  // navigation vers update
  edit(user) {
    this.router.navigate(['/update', user.id]);
  }
  
  // fonction delete
  delete(i) {
    this._authService.delete(i)
  }


}
