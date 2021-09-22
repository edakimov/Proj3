"use strict";

//1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3
const oneSeenMovie1 = prompt('Один из последний посмотренных фильмов?', '');
const rateMovie1 = prompt('На сколько оцените его?', '');
const oneSeenMovie2 = prompt('Один из последний посмотренных фильмов?', '');
const rateMovie2 = prompt('На сколько оцените его?', '');
personalMovieDB.movies[oneSeenMovie1] = rateMovie1;
personalMovieDB.movies[oneSeenMovie2] = rateMovie2;

console.log(personalMovieDB);

