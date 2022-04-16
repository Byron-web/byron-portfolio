import {UserInterface} from "../abstractions/user.interface";

export class User implements UserInterface{
  public id!: number;
  public email!: string;
  public first_name!: string;
  public last_name!: string;
  public avatar!: string;
}
