/// <reference path="../app.d.ts" />

// webpack의  file-loader를 사용하면 src의 경로가 dist의 경로로 mapping될 수 있도록 실제 파일을 복사하고, 그 복사된 결과파일명을 뱉어낸다.
let movieDataUrl = require('file!../moviesData.json')
let View = require('./movieList.component.html');

interface IMovie {
  id:number;
  title:string;
  rating:number;
  length:number;
}

class Controller {
  static $inject = ['$http'];

  constructor(private $http:ng.IHttpService) {
    this.message = "Initial Controller message!";
    this.movies = [];
  }

  $onInit():any {
    this.fetchMovies()
      .then(movies => {
        this.movies = movies;
      })
  } 

  fetchMovies():ng.IPromise<any> {
    return this.$http.get(movieDataUrl)
      .then(response => {
        return response.data;
      });
  }

  message: string;
  movies: IMovie[];

  changeMessage() : void {
    this.message = "You Changed the message!";
  }
}

export default function movieListComponent(app: angular.IModule) {
  app.component("movieList", {
    template: View,
    controller: Controller,
    controllerAs: "vm"
  });
  console.log("initialized movie-list component.")
}