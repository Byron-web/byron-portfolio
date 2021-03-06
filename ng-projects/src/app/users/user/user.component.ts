import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() public user!: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }


}
