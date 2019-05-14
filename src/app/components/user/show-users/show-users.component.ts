import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ClientUser } from 'src/app/shared/models/clientUser';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  users: ClientUser[];

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.users = await this.userService.getAll();
  }

}
