import {Dispatcher} from '../dispatchers/appDispatcher';
import {Author, AuthorApi} from '../api/authorApi';

export type AuthorActionId
 = "CreateAuthor"
 | "UpdateAuthor"
 | "DeleteAuthor"
;

export interface AuthorAction {
  actionType:AuthorActionId;
  author:Author
}

export class AuthorActions {
  static createAuthor(author: Author) {
    let newAuthor = AuthorApi.saveAuthor(author);

    // 이봐 dispatcher. 관심있어 하는 store등에게 author를 생성하라는 요청이 들어왔다고 알려주겠나~.
    Dispatcher.dispatch({
      actionType: "CreateAuthor",
      author: newAuthor
    });
  }
  
  static updateAuthor(author:Author) {
    let updatedAuthor = AuthorApi.saveAuthor(author);

    // 이봐 dispatcher. 관심있어 하는 store등에게 author를 갱신하라는 요청이 들어왔다고 알려주겠나~.
    Dispatcher.dispatch({
      actionType: "UpdateAuthor",
      author: updatedAuthor
    });
  }

  static deleteAuthorById(id:string) {
    
    let deletedAuthor = AuthorApi.deleteAuthorById(id)

    Dispatcher.dispatch({
      actionType: "DeleteAuthor",
      author:deletedAuthor,
    });
  }
}

