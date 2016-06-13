//export { MainController };
import {IUserService} from "../services/userService";
import {User} from "../model";

export class MainController {
  static $inject = ["userService"];
  constructor(private userService:IUserService) {
    this.userService.loadAllUsers()
      .then((users) => {
        this.users = users;
        console.log(this.users);
      });
  }
  users:User[];
  message:string = "Hello I'm Main Controller";
}
console.log("Main Controller Evaluated..");
