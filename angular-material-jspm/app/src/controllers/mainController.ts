//export { MainController };
import {IUserService} from "../services/userService";
import {User} from "../model";

export class MainController {
  static $inject = ["userService", "$mdSidenav"];
  constructor(
    private userService:IUserService,
    private $mdSidenav: angular.material.ISidenavService) {
    this.userService.loadAllUsers()
      .then((users) => {
        this.users = users;
        this.selectedUser = users[0];
        ///console.log(this.users);
      });
  }
  users:User[];
  selectedUser: User = null;
  searchText: string = '';

  toggleSidenav() : void {
    this.$mdSidenav("left").toggle();
  }
  selectUser(user:User) : void {
    this.selectedUser = user;
    var sidenav = this.$mdSidenav("left");
    if(sidenav.isOpen()) {
      sidenav.close();
    }
  }
}
console.log("Main Controller Evaluated..");
