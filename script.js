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
let nameSeenMovie;
let rateMovie;
let i = 1;

do {
    nameSeenMovie = prompt('Один из последний посмотренных фильмов?', ''),
    rateMovie = prompt('На сколько оцените его?', ''),
    personalMovieDB.movies[i] = {
        [nameSeenMovie]: rateMovie
    }
    i++;
}
while (i < 3);3

console.log(personalMovieDB);