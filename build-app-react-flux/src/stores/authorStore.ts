import {Dispatcher, ActionType} from '../dispatchers/appDispatcher';
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

    Dispatcher.register(payload => {
      switch (payload.actionType) {
        case 'CREATE_AUTHOR':
          this.createAuthor(payload.author);
          break;
        case 'UPDATE_AUTHOR':
          this.updateAuthor(payload.author);
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
  getAllAuthors():Author[] {
    return this._authors;
  }
  getAuthorById(id:string) {
    return this._authors.find(author => author.id==id);
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
