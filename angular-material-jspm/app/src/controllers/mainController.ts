//export { MainController };
import {IUserService} from "../services/userService";
import {User, Note} from "../model";

export class MainController {
  static $inject = ["userService", "$mdSidenav", "$mdToast"];
  constructor(
    private userService:IUserService,
    private $mdSidenav: angular.material.ISidenavService,
    private $mdToast: angular.material.IToastService
    ) {
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
  tabIndex: number = 0;
  toggleSidenav() : void {
    this.$mdSidenav("left").toggle();
  }
  selectUser(user:User) : void {
    this.selectedUser = user;
    var sidenav = this.$mdSidenav("left");
    if(sidenav.isOpen()) {
      sidenav.close();
    }
    this.tabIndex = 0;
  }
  removeNote(note:Note) {
    var noteIndex = this.selectedUser.notes.indexOf(note);
    if(noteIndex >= 0) {
      this.selectedUser.notes.splice(noteIndex, 0);
      
      var toastMessage = "Note[" + note.title + "] has been removed.";
      //this.$mdToast.showSimple(toastMessage);
      this.openToast(toastMessage);
    }
  }

  openToast(toastMessage:string): void {
    this.$mdToast.show(
        this.$mdToast.simple()
          .textContent(toastMessage)
          .position("top right")
          .hideDelay(3000)
    );
  }
}
console.log("Main Controller Evaluated..");
