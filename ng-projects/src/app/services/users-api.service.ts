import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListUsersDtoInterface } from '../abstractions/list-users-dto.interface';

@Injectable()
export class UserApiService {
  private readonly baseUrl!: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:5102';
  }

  public getUsers(): Observable<ListUsersDtoInterface> {
    const url: string = `${this.baseUrl}/api/users/test`;
    return this.httpClient.get<ListUsersDtoInterface>(url);
  }
}
