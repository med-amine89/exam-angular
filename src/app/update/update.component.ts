import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  editForm: FormGroup;
  submited: boolean = false;
  Activatedroute: any;
  id: any;


  constructor(private Authservice: AuthService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // recuperation id et les donnees de localstorage  + recherche id
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    

    this.editForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl(''),
      categorie: new FormControl('')
    });
    // find user (update)
    let userPost = this.Authservice.storageData().find(userid => userid.id == this.id);
    this.editForm.patchValue(userPost)

  }

  onSubmit() {
    this.submited = true;
    if (this.editForm.value.invalid) {
      return;
    }


  }
  // fonction update
  update() {
    let post1 = this.id;
    let post2 = this.editForm.value;
    this.Authservice.Updateservice(post1, post2);
  }

}
