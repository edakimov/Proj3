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

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);