import { Component, OnInit } from '@angular/core';
import {NawinformationService} from "../../shared/services/nawinformation.service";
import {NAWInformationModel} from "../../shared/models/nawinformation.model";
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
      // In de toekomst wordt dit de huidige ingelogde user
      // @ts-ignore
      this.user = this.nawinformationService.getNAWInformation(8318);

      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        residence: ['', Validators.required],
        email: ['', [Validators.required]
      ]});

      this.registerForm.controls['name'].setValue(this.user.name);
      this.registerForm.controls['address'].setValue(this.user.address);
      this.registerForm.controls['residence'].setValue(this.user.residence);
      this.registerForm.controls['email'].setValue(this.user.email);
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

