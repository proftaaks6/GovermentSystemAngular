import {Component, Inject, Input, OnInit} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {ClientUser} from "../../../shared/models/clientUser.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.css']
})
export class ChangeUserComponent implements OnInit {

  @Input()
  user: ClientUser;

  id: number;
  email: string;
  name: string;
  address: string;
  residence: string;

  error = false;
  success = false;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.id = this.user.id;
    this.email = this.user.email;
    this.name = this.user.name;
    this.address = this.user.address;
    this.residence = this.user.residence;
  }

  async onSubmit() {
    this.success = false;
    this.error = false;

    if (!this.name || !this.email || !this.address || !this.residence) {
      this.error = true;
      return;
    }

    try {
      await this.userService.updateUser(this.id, this.name, this.address, this.residence, this.email);
      this.success = true;
    } catch {
      this.error = true;
    }
  }

}
