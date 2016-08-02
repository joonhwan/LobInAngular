import {Dispatcher} from '../dispatchers/appDispatcher';
import {AuthorActionId, AuthorAction} from '../actions/authorActions';
import {Author, AuthorApi} from '../api/authorApi';
import {EventEmitter} from 'events';

type EventType = 'change';

class AuthorStoreClass {
  static EventType: EventType = 'change';
  private _impl: EventEmitter;
  private _authors: Author[];

  constructor() {
    this._impl = new EventEmitter();
    this._authors = [];

    this.init();
  }
  private init() {
    setTimeout(() => {
      this._authors = AuthorApi.getAllAuthors();
      this.emitChange();
    }, 2000);

    Dispatcher.register(action => {
      let payload = action as AuthorAction;
      
      switch (payload.actionType) {
        case "CreateAuthor":
          this.createAuthor(payload.author);
          break;
        case "UpdateAuthor":
          this.updateAuthor(payload.author);
          break;
        case "DeleteAuthor":
          this.deleteAuthor(payload.author);
          break;
     }
    });
  }
  createAuthor(author:Author) {
    this._authors.push(author);
    this.emitChange();
  }
  updateAuthor(author:Author) {
    let found = this.getAuthorById(author.id);
    if(found) {
      found.firstName = author.firstName;
      found.lastName = author.lastName;
      this.emitChange();
    }
  }
  deleteAuthor(author:Author) {
    _.remove(this._authors, authorElement => authorElement.id == author.id);
    this.emitChange();
  }
  getAllAuthors():Author[] {
    return this._authors;
  }
  getAuthorById(id:string) {
    return _.find(this._authors, author => author.id==id);
  }
  addChangeListener(callback: Function) {
    this._impl.addListener(AuthorStoreClass.EventType, callback);
  }
  removeChangeListener(callback: Function) {
    this._impl.removeListener(AuthorStoreClass.EventType, callback);
  }
  emitChange() {
    this._impl.emit(AuthorStoreClass.EventType);
  }
}

export let AuthorStore = new AuthorStoreClass();
