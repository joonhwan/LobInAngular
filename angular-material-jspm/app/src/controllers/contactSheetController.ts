import angular from 'angular';
import 'angular-material';
import {User} from '../model';
import {UserService} from '../services/userService';

export class ContactSheetController {
  static $inject = ['$mdBottomSheet', 'userService'];
  constructor(
    private $mdBottomSheet:ng.material.IBottomSheetService,
    private userService:UserService
  ) {
    this.user = userService.selectedUser;
  }

  actions = [
    { name:'Phone', icon:'phone' },
    { name:'Twitter', icon:'twitter' },
    { name:'Google+', icon:'google_plus' },
    { name:'Hangout', icon:'hangouts' }
  ];
  user:User;

  activateContact(action) {
    this.$mdBottomSheet.hide(action);
  }
}