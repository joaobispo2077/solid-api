import { v4 as uuid } from 'uuid';

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(user: Omit<User, 'id'>, id?: string) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;

    if (!id) this.id = uuid();
    else this.id = id;
  }
}
