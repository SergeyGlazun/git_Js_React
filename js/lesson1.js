const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    geners:[],
    private:false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели');
        while ( personalMovieDB.count = '' ||  personalMovieDB.count == null || isNaN( personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели','');
        }
    },
    rememberMyFilms: function(){
        for(let i = 0;i<2;i++){
            const a = promt('Один из последних просмотренных фильмов?',''),
            b = prompt('На сколько оцените его?', '');
            
            if(a!=null && b!=null && a !='' && b !='' && a.length<50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else{
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count <10){
            console.log("Просмотрено доволно мало фильмов");
        } else if(personalMovieDB.count >=10 && personalMovieDB.count<30){
            console.log("Вы классически зритель");
        } else if (personalMovieDB.count >= 30){
            console.log("Вы кином");
        }else{
            console.log("Произошло ошибка");
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB:function(){
if(personalMovieDB.private){
    personalMovieDB.private = false;
}else{
    personalMovieDB.private = true;
}
    },
    writeYouGenres: function(){
        for(let i= 1;i<=3;i++){
            let gener = prompt(`Ваш любимый жанр под номером ${i}`);

            if(gener === '' || gener === null){
console.log('Вы ввели некорректные данные');
i--;
            }
            else{
                personalMovieDB.geners[i-1] = gener;
            }
           
        }
        personalMovieDB.geners.forEach((item,i) => {
        console.log(`жанр ${i+1} - это ${item}`);
        });
    }   
};


