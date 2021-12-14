const numderOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count: numderOfFilms,
    movies:{},
    actors:{},
    geners:[],
    private:false
};

const   a=prompt('Сколько фильмов вы уже посмотрели?',''),
        b=prompt('на сколько отценили его',''),
        c=prompt('Сколько фильмов вы уже посмотрели?',''),
        d=prompt('на сколько отценили его','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);