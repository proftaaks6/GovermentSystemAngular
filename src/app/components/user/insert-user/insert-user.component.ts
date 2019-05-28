import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css']
})
export class InsertUserComponent implements OnInit {

  email: string;
  name: string;
  address: string;
  residence: string;

  error = false;
  success = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.success = false;
    this.error = false;

    if (!this.name || !this.email || !this.address || !this.residence) {
      this.error = true;
      return;
    }

    try {
      await this.userService.saveNewUser(this.name, this.email, this.address, this.residence);
      this.success = true;
      this.email = '';
      this.name = '';
      this.address = '';
      this.residence = '';
    } catch {
      this.error = true;
    }
  }

}
