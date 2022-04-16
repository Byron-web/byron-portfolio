import { User } from '../models/user.model';

export interface ListUsersDtoInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
