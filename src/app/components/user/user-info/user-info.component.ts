import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { LoginAttempt } from 'src/app/shared/models/loginAttempt.model';
import { ClientUser } from 'src/app/shared/models/clientUser.model';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { Invoice } from 'src/app/shared/models/invoice.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: ClientUser;
  loginAttempts: LoginAttempt[];
  invoices: Invoice[];

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.user = await this.userService.getUserById(params.id);
      this.loginAttempts = await this.userService.getLoginAttempts(this.user.id);

      this.invoices = this.user.ownedVehicleIds.length > 0
        ? await this.invoiceService.getForVehicles(this.user.ownedVehicleIds)
        : [];
    });
  }

}
