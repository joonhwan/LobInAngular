import ng from 'angular';
import {User, Note} from './../model'

export interface IUserService {
  loadAllUsers() : ng.IPromise<User[]>;
  addUser(user:User): ng.IPromise<User>;
  selectedUser: User;
}

export class UserService implements IUserService {
  static $inject = ["$q"];
  constructor(private $q: ng.IQService) {

  }
  loadAllUsers() : ng.IPromise<User[]> {
    return this.$q.when(this.users);
  }

  addUser(user:User) : ng.IPromise<User> {
    this.users.push(user);
    return this.$q.when(user);
  }
  selectedUser: User = null;
  private users: User[] = [
    {
      name:"Joonhwan",
      avatar: "svg-1",
      bio: `Joonwhan ! Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC, making
      it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
      Sydney College in Virginia, looked up one of the more obscure Latin words
      , consectetur, from a Lorem Ipsum passage, and going through the cites of
       the word in classical literature, discovered the undoubtable source.` ,
      notes: [
        {title: "Pay back dinner", date: new Date("2016-01-22")},
        {title: "Buy flower to my wife", date: new Date("2016-09-08")}
      ]
    },
    {
      name:"Sinyoung",
      avatar: "svg-2",
      bio: `Sinyoung !Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC, making
      it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
      Sydney College in Virginia, looked up one of the more obscure Latin words
      , consectetur, from a Lorem Ipsum passage, and going through the cites of
       the word in classical literature, discovered the undoubtable source.` ,
      notes: [
        { title: "Pay back dinner", date: new Date("2016-01-22")},
        {title: "Buy flower to my wife", date: new Date("2016-09-08")}
      ]
    },
    {
      name:"Seoyeon",
      avatar: "svg-3",
      bio: `Seoyeon ! Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC, making
      it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
      Sydney College in Virginia, looked up one of the more obscure Latin words
      , consectetur, from a Lorem Ipsum passage, and going through the cites of
       the word in classical literature, discovered the undoubtable source.` ,
      notes: [
        { title: "Pay back dinner", date: new Date("2016-01-22")},
      ]
    },
    {
      name:"Eunseo",
      avatar: "svg-4",
      bio: `Eunseo! Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC, making
      it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
      Sydney College in Virginia, looked up one of the more obscure Latin words
      , consectetur, from a Lorem Ipsum passage, and going through the cites of
       the word in classical literature, discovered the undoubtable source.` ,
      notes: [
      ]
    }
  ]
}
