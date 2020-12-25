import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  registrationForm: FormGroup;
  submited: boolean = false;
  upDateForm: any;

  constructor(private Authservice : AuthService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl(''),
      categorie: new FormControl('')
  
    });
  
  }

  onSubmit() {
    this.submited = true;
    if (this.registrationForm.value.invalid) {
      return;
    }
  }

  

}
