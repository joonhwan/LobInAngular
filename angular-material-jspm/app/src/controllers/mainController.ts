//export { MainController };
import {IUserService} from "../services/userService";
import {User, Note} from "../model";
import angular from 'angular';

export class MainController {
  static $inject = ["userService", "$mdSidenav", "$mdToast", "$mdDialog", "$mdMedia", "$mdBottomSheet"];
  constructor(
    private userService:IUserService,
    private $mdSidenav: angular.material.ISidenavService,
    private $mdToast: angular.material.IToastService,
    private $mdDialog: angular.material.IDialogService,
    private $mdMedia: angular.material.IMedia,
    private $mdBottomSheet: ng.material.IBottomSheetService
    ) {
    this.userService.loadAllUsers()
      .then((users) => {
        this.users = users;
        this.selectedUser = users[0];
        this.userService.selectedUser = users[0];
        ///console.log(this.users);
      });

  }
  users:User[];
  selectedUser: User = null;
  searchText: string = '';
  tabIndex: number = 0;
  avatars:string[];
  newNoteText: string;

  toggleSidenav() : void {
    this.$mdSidenav("left").toggle();
  }
  selectUser(user:User) : void {
    this.selectedUser = user;
    this.userService.selectedUser = user;

    var sidenav = this.$mdSidenav("left");
    if(sidenav.isOpen()) {
      sidenav.close();
    }
    this.tabIndex = 0;
  }

  addUser($event): void {
    let useFullScreen = (this.$mdMedia("sm") || this.$mdMedia("xs"));
    console.log('showing dialog..');
    this.$mdDialog.show({
      templateUrl: "app/view/addUserDialog.html",
      parent: angular.element(document.body),
      targetEvent: $event,
      controller:"addUserDialogController",
      controllerAs:"vm",
      clickOutsideToClose: true
    }).then((user:User) => {
      this.userService
        .loadAllUsers()
        .then((users) => {
          this.users = users;
          this.selectedUser = user;
        });
    }).catch((reason:any) => {
      console.log("You cancelled dialog.");
    });
  }

  showContactSheet($event): void {
    this.$mdBottomSheet.show(<any>{
      templateUrl: "app/view/contactSheet.html",
      parent: angular.element(document.getElementById("content")),
      controller: "contactSheetController",
      controllerAs: "vm",
      clickOutsideToClose: true,
      targetEvent: $event
    }).then(response => {
      response && console.log("you clicked " + response.name);
    }).catch(reason => {

    });
  }

  addNote() : void {
    this.selectedUser.notes.push(new Note(this.newNoteText, new Date()));
    this.newNoteText == "";  
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
      "Anoo notes will be deleted.", $event)
      .then(() => {
        this.selectedUser.notes = [];
        this.openToast("Deleted all notes.");
      });
    // var confirm = this.$mdDialog.confirm()
    //   .title("Are sure you want to delete all notes?")
    //   .textContent("All notes will be deleted. You won't undo this action.")
    //   .ariaLabel('Lucky day')
    //   .targetEvent($event)
    //   .ok("Yes")
    //   .cancel("No")
    //   ;
    //   var self = thi s;
    //   this.$mdDialog.show(confirm).then(() => {
    //     self.selectedUser.notes = [];
    //     self.openToast("Deleted all notes.")
    //     ;
    //   })  
  }

  showConfirm(title:string, text:string, ev:MouseEvent) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = this.$mdDialog.confirm()
          .title(title)
          .textContent(text)
          .ariaLabel("question dialog")
          .targetEvent(ev)
          .ok('Yes')
          .cancel('No');
    return this.$mdDialog.show(confirm)
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
