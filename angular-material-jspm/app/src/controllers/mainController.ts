//export { MainController };
import {IUserService} from "../services/userService";
import {User, Note} from "../model";
import angular from 'angular';

export class MainController {
  static $inject = ["userService", "$mdSidenav", "$mdToast", "$mdDialog"];
  constructor(
    private userService:IUserService,
    private $mdSidenav: angular.material.ISidenavService,
    private $mdToast: angular.material.IToastService,
    private $mdDialog: angular.material.IDialogService
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
  removeNote(note:Note) : void {
    var noteIndex = this.selectedUser.notes.indexOf(note);
    if(noteIndex >= 0) {
      this.selectedUser.notes.splice(noteIndex, 0);
      
      var toastMessage = "Note[" + note.title + "] has been removed.";
      //this.$mdToast.showSimple(toastMessage);
      this.openToast(toastMessage);
    }
  }
  removeAllNotes($event) : void {

    this.showConfirm("Are you sure you want to delete all notes?", 
      "Anoo notes will be deleted.");
    var confirm = this.$mdDialog.confirm()
      .title("Are sure you want to delete all notes?")
      .textContent("All notes will be deleted. You won't undo this action.")
      .targetEvent($event)
      .ok("Yes")
      .cancel("No")
      ;
      var self = this;
      this.$mdDialog.show(confirm).then(() => {
        self.selectedUser.notes = [];
        self.openToast("Deleted all notes.")
        ;
      })
  }

  showConfirm(title:string, text:string) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = this.$mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Please do it!')
          .cancel('Sounds like a scam');
    this.$mdDialog.show(confirm).then(function() {
      status = 'You decided to get rid of your debt.';
    }, function() {
      status = 'You decided to keep your debt.';
    });
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
