import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ListUsersDtoInterface} from "../abstractions/list-users-dto.interface";

@Injectable()
export class UserApiService {
  private readonly baseUrl!: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://reqres.in';
  }

  public getUsers(): Observable<ListUsersDtoInterface> {
      const url: string = `${this.baseUrl}/api/users?page=1`;
      return this.httpClient.get<ListUsersDtoInterface>(url);
  }

}
