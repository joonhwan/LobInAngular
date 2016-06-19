import angular from 'angular';
import 'angular-material';
import {User} from '../model';
import {IUserService} from '../services/userService';

export class CreateUser {
  constructor (
    public firstName: string = "",
    public lastName: string = "" ,
    public avatar: string = "" ,
    public bio: string = "" 
  ) {
  }

  toModel(): User {
    return new User(
      this.firstName + this.lastName,
      this.avatar,
      this.bio,
      []);
  }
}


export class AddUserDialogController {
  static $inject = ['$mdDialog', 'userService'];
  
  constructor(
    private $mdDialog:ng.material.IDialogService,
    private userService:IUserService
    ) {

      this.avatars = [
        'svg-1', 'svg-2', 'svg-3', 'svg-4'
      ];
      this.user = new CreateUser();
  }

  user:CreateUser;
  avatars:string[];

  cancel(): void {
    this.$mdDialog.cancel();
  }

  save(): void {
    this.$mdDialog.hide();
    this.userService.addUser(this.user.toModel())
      .then(user => this.$mdDialog.hide(user))
      .catch(reason => {
        //TODO toast.
      })
  }
}