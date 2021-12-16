"use strict";

// let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFields: function() {
        for (let i = 0; i < 2; i++) {
            const nameSeenMovie = prompt('Один из последний посмотренных фильмов?', ''),
                  rateMovie = prompt('На сколько оцените его?', '');
        
            if (nameSeenMovie != null && rateMovie != null && nameSeenMovie != '' && rateMovie != '' && nameSeenMovie.length <= 50) {
                personalMovieDB.movies[nameSeenMovie] = rateMovie;
                console.log('DONE');
            } else {
                console.log('ERROR');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
        
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр по номером ${i}`);
            // if (genre === '' || genre == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--; 
            // }
            // else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--; 
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
        }
    }   
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFields();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();

// ____________________________________________________________________________________

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