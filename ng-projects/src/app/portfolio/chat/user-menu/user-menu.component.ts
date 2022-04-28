import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { ListUsersDtoInterface } from '../../../abstractions/list-users-dto.interface';
import { UserApiService } from '../../../services/users-api.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  public users: User[] = [];
  private _listUsers!: ListUsersDtoInterface;

  constructor(private usersApiService: UserApiService) {}

  ngOnInit(): void {
    this.usersApiService.getUsers().subscribe((result) => {
      this._listUsers = result;
      this.users = result.data;
    });
  }
}
