import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ClientUser } from 'src/app/shared/models/clientUser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  users: ClientUser[];

  constructor(private userService: UserService,
    private router: Router) { }

  async ngOnInit() {
    this.users = await this.userService.getAll();
  }

  goToUser(id: number) {
    this.router.navigateByUrl(`/user/${id}`);
  }

}
