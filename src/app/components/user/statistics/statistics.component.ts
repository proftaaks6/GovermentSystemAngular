import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { ClientUser } from 'src/app/shared/models/clientUser.model';
import { LoginAttempt } from 'src/app/shared/models/loginAttempt.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  @Input()
  private loginAttempts: LoginAttempt[];

  constructor() { }

  async ngOnInit() {
  }

}
