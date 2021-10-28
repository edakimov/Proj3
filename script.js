"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let nameSeenMovie;
let rateMovie;

function rememberMyFields() {
    for (let i = 0; i < 2; i++) {
        nameSeenMovie = prompt('Один из последний посмотренных фильмов?', ''),
        rateMovie = prompt('На сколько оцените его?', '');
    
        if (nameSeenMovie != null && rateMovie != null && nameSeenMovie != '' && rateMovie != '' && nameSeenMovie.length <= 50) {
            personalMovieDB.movies[nameSeenMovie] = rateMovie;
            console.log('DONE');
        } else {
            console.log('ERROR');
            i--;
        }
    }
    
}

rememberMyFields();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
    
}

detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);


let favoriteGenre;

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = favoriteGenre = prompt(`Ваш любимый жанр по номером ${i}`);
        }
    }

writeYourGenres();

// let i = 1;

// do {
//     nameSeenMovie = prompt('Один из последний посмотренных фильмов?', '');
//         if (nameSeenMovie == null) {
//             continue;
//         } else if ((nameSeenMovie.length == 0) || (nameSeenMovie.length > 50)) {
//             continue;
//         } 
//     rateMovie = prompt('На сколько оцените его?', ''),
//     personalMovieDB.movies[i] = {
//         [nameSeenMovie]: rateMovie
//     }
//     i++;
// }
// while (i < 3);

// let i = 1;
// while (i < 3) {
//     nameSeenMovie = prompt('Один из последний посмотренных фильмов?', '');
//         if (nameSeenMovie == null) {
//             continue;
//         } else if ((nameSeenMovie.length == 0) || (nameSeenMovie.length > 50)) {
//             continue;
//         } 
//     rateMovie = prompt('На сколько оцените его?', ''),
//     personalMovieDB.movies[i] = {
//         [nameSeenMovie]: rateMovie
//     }
//     i++;
// }
