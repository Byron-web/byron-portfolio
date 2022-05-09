import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { ListUsersDtoInterface } from '../../../abstractions/list-users-dto.interface';
import { UserApiService } from '../../../services/users-api.service';
import { SearchFilterPipe } from '../../../search-filter.pipe';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {
  public users: User[] = [];
  private _listUsers!: ListUsersDtoInterface;
  title = 'angular-text-search-highlight';
  searchText = '';
  characters = ['George', 'Janet', 'Emma', 'Eve', 'Charles', 'Tracey'];

  constructor(private usersApiService: UserApiService) {}

  ngOnInit(): void {
    this.usersApiService.getUsers().subscribe((result) => {
      this._listUsers = result;
      this.users = result.data;
    });
  }
}
