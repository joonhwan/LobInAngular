import {Dispatcher as DispatcherClass} from 'flux';
import {Author} from '../api/authorApi';

export type ActionType = "CREATE_AUTHOR" | "UPDATE_AUTHOR"; 

export interface AuthorPayload {
  actionType:ActionType;
  author:Author
}

export let Dispatcher = new DispatcherClass<AuthorPayload>();
