//This file is mocking a web API by hitting hard coded data.
import * as _ from 'lodash';
import {authors} from './authorData';

export interface Author {
	id: string,
	firstName: string,
	lastName: string
};

class AuthorApiClass {

	getAllAuthors(): Author[] {
		return _clone(authors);
	}

	getAuthorById(id): Author {
		var author = _.find(authors, { id: id });
		return _clone(author);
	}

	saveAuthor(author: Author) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');

		if (author.id) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			author.id = _generateId(author);
			authors.push(author);
		}

		return _clone(author);
	}

	deleteAuthor(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(authors, { id: id });
	}
};


//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function (item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

export const AuthorApi = new AuthorApiClass();
