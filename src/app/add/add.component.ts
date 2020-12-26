import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user: any = {};
  registrationForm: FormGroup;
  submited: boolean = false;

  constructor(private authservice: AuthService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required])

    });
  }


  onSubmit() {
    this.submited = true;
    if (this.registrationForm.value.invalid) {
      return;
    }

    // afficher les donnes localstorage dans list component
    this.authservice.localStorageFn(this.registrationForm.value)

  }

}
