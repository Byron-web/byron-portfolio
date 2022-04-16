import {ListUsersDtoInterface} from "../abstractions/list-users-dto.interface";
import {User} from "./user.model";

export class ListUsersDtoModel implements ListUsersDtoInterface{
  page!: number;
  per_page!: number;
  total!: number;
  total_pages!: number;
  data!: User[];

}
