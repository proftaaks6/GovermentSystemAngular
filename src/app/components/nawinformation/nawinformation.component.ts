import { Component, OnInit } from '@angular/core';
import {NawinformationService} from "../../shared/services/nawinformation.service";
import {NAWInformationModel} from "../../models/nawinformation.model";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {__values} from "tslib";

  @Component({
  selector: 'app-nawinformation',
  templateUrl: './nawinformation.component.html',
  styleUrls: ['./nawinformation.component.css']
})
export class NawinformationComponent implements OnInit {

    private user: NAWInformationModel = null;
    submitted = false;
    registerForm: FormGroup;


    constructor(private nawinformationService: NawinformationService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
      // @ts-ignore
      this.user = this.nawinformationService.getNAWInformation(8318);
      this.registerForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        surname: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', [Validators.required, Validators.minLength(6)]],
        street: ['', Validators.required],
        housenumber: ['', Validators.required],
        zipcode: ['', Validators.required]
      });

      this.registerForm.controls['firstname'].setValue(this.user.firstname);
      this.registerForm.controls['surname'].setValue(this.user.surname);
      this.registerForm.controls['country'].setValue(this.user.country);
      this.registerForm.controls['city'].setValue(this.user.city);
      this.registerForm.controls['street'].setValue(this.user.street);
      this.registerForm.controls['housenumber'].setValue(this.user.housenumber);
      this.registerForm.controls['zipcode'].setValue(this.user.zipcode);
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {

      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }

      this.nawinformationService.changeNAWInformation(this.registerForm.value);
    }
  }

