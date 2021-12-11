"use strict";

let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt ("Скільки фільмів Ви вже переглянули?", "Введіть число");
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt ("Скільки фільмів Ви вже переглянули?", "Введіть число");
//     }
// }

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function start () {
            this.count = +prompt ("Скільки фільмів Ви вже переглянули?", "Введіть число");
            while (this.count == '' || this.count == null || isNaN(this.count)) {
                this.count = +prompt ("Скільки фільмів Ви вже переглянули?", "Введіть число");
            }
        },
    rememberMyFilms: function rememberMyFilms() {
        for (let i = 0; i < this.count; i++) {
    
            let lastMovie = prompt ("Який фільм Ви переглядали останнім,", "Введіть назву фільму");
                if (lastMovie !== null && lastMovie !== "Введіть назву фільму" && lastMovie !== '' &&
                 lastMovie.length <= 50){
                        let movieMark = prompt ("Як ви оціните цей фільм по 10-бальній системі?", "Поставте оцінку");
                        if (movieMark !== null && movieMark !== '' && movieMark !== "Поставте оцінку" && 
                        !isNaN(movieMark)){
                            this.movies[lastMovie] = +movieMark;
                        } else {
                            alert ("Поставте свою оцінку");
                            i--;
                        }
                } else {
                    alert ("Введені дані не коректні або в них більше 50-ти символів");
                    i--;
                }
        }
    }  
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();

console.log(personalMovieDB);



// function rememberMyFilms() {
//     for (let i = 0; i < numberOfFilms; i++) {

//         let lastMovie = prompt ("Який фільм Ви переглядали останнім,", "Введіть назву фільму");
//         let movieMark = prompt ("Як ви оціните цей фільм по 10-бальній системі?", "Поставте оцінку");
//             if (lastMovie !== null && movieMark !== null && lastMovie !== "Введіть назву фільму" && 
//                 lastMovie !== '' && movieMark !== '' && lastMovie.length <= 50){
//                 personalMovieDB.movies[lastMovie] = +movieMark;
//             } else {
//                 alert ("Введені дані не коректні або в них більше 50-ти символів");
//                 i--;
//             }
//     }
// }

// rememberMyFilms();

// // let i = 0;
// // while (i < 2) {
// //     let lastMovie = prompt ("Який фільм Ви переглядали останнім,", "Введіть назву фільму");
// //     let movieMark = prompt ("Як ви оціните цей фільм по 10-бальній системі?", "Поставте оцінку");
// //     if (lastMovie !== null && movieMark !== null && lastMovie !== "Введіть назву фільму" && 
// //         lastMovie !== '' && movieMark !== '' && lastMovie.length <= 50){
// //         personalMovieDB.movies[lastMovie] = +movieMark;
// //     } else {
// //         alert ("Введені дані не коректні або в них більше 50-ти символів");
// //         i--;
// // }
// // i++;
// // }
// console.log (personalMovieDB);

// function detectPersonalLevel() {
//     if (personalMovieDB.count >= 20) {
//         alert ("Оооо, та Ви справжній кіноман)");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 20){
//         alert ("Ви класичний глядач.");
//     } else if  (personalMovieDB.count < 10 && personalMovieDB.count > 0){
//         alert ("Ви переглянули замало фільмів.");    
//     } else if  (personalMovieDB.count == 0 ||  personalMovieDB.count == null){
//         alert ("Введіть число");  
//     } else {
//         alert ("Сталася помилка, будь ласка, введіть дані повторно.");
//     }
// }

// detectPersonalLevel();



// function showMyDB() {
//     if (personalMovieDB.privat == false ){
//         console.log (personalMovieDB);
//     }
// }
// showMyDB();

// function showMyDB(hidden) {
//     if (!hidden){
//         console.log (personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres(genres) {
//     for (let i = 1; i <= 3; i++){
//         let answers = prompt(`Який Ваш улюблений жанр під номером ${i}?`);
//         if (answers !== '' && answers !== null){
//             genres[i - 1] = answers;
//             //genres[i - 1] = prompt(`Який Ваш улюблений жанр під номером ${i}?`); 
//             //- допустимий такий варіант спрощення, без змінної answers
//         } else {
//             i--;
//         }
//     }
// }

// writeYourGenres(personalMovieDB.genres);