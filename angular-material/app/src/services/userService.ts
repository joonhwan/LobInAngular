export class User {
    name: string;
}

export interface IUserService {
  loadAllUsers(): ng.IPromise<User[]>;
}

export class UserService implements IUserService {
  static $inject = ['$q'];
  constructor(private $q: ng.IQService) {
  }

  loadAllUsers(): ng.IPromise<User[]> {
    return this.$q.when(this.users);
  }
  users: User[];

}
