import angular from 'angular';

interface IUserServiceResponse {
    success:boolean;
    failReason:string;
}

interface IUserService {
  create(user:IUser):Promise<IUserServiceResponse>;
}

interface IUser {
  
}

class RegisterController {
  static $inject = ['$location', '$rootScope', 'userService'];
  constructor(
    private $location: angular.ILocationService,
    private $rootScope: angular.IRootScopeService,
    private userService: IUserService
  ) {

  }
  user: IUser;
  registering: boolean;

  register(): void {
    this.registering = true;
    this.userService.create(this.user)
  }
}