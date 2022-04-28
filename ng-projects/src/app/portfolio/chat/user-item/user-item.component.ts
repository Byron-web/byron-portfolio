import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() public user!: User;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
