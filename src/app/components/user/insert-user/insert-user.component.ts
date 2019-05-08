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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  async onSubmit() {
    await this.userService.saveNewUser(this.name, this.email, this.address, this.residence);
  }

}
