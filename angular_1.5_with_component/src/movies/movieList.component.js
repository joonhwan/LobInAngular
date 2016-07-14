"use strict";
// webpack의  file-loader를 사용하면 src의 경로가 dist의 경로로 mapping될 수 있도록 실제 파일을 복사하고, 그 복사된 결과파일명을 뱉어낸다.
var movieDataUrl = require('file!../moviesData.json');
var View = require('./movieList.component.html');
var Controller = (function () {
    function Controller($http) {
        this.$http = $http;
        console.log("controller instantiated...");
        this.message = "Initial Controller message!";
        this.movies = [];
    }
    Controller.prototype.$onInit = function () {
        var _this = this;
        this.fetchMovies()
            .then(function (movies) {
            _this.movies = movies;
            // _.forEach(movies, movie => {
            //   console.log(JSON.stringify(movie));
            // });
        });
    };
    Controller.prototype.upRating = function (movie) {
        if (movie.rating < 5) {
            movie.rating += 1;
        }
    };
    Controller.prototype.downRating = function (movie) {
        if (movie.rating > 0) {
            movie.rating -= 1;
        }
    };
    Controller.prototype.fetchMovies = function () {
        return this.$http.get(movieDataUrl)
            .then(function (response) {
            return response.data;
        });
    };
    Controller.prototype.changeMessage = function () {
        this.message = "You Changed the message!";
    };
    Controller.$inject = ['$http'];
    return Controller;
}());
function registerMovieListComponent(app) {
    app.component("movieList", {
        template: View,
        controller: Controller,
        controllerAs: "vm"
    });
    console.log("initialized movie-list component.");
}
exports.__esModule = true;
exports["default"] = registerMovieListComponent;
//# sourceMappingURL=movieList.component.js.map