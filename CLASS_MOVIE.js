//CLASS MOVIE
//the below class has been created such that it produces answer for following 4 questions

class Movie{
    constructor(title,studio,rating='PG'){
        this.title = title,
        this.studio = studio,
        this.rating = rating     
    }
    getPG(arr){
        let PGResult = []
          for (let obj of arr){
            if(obj.rating==='PG'){
                PGResult.push(obj)
            }
          }
          return PGResult
    }
}

/*a.Write a constructor for the class Movie, which takes a String representing 
the title of the movie, a String representing the studio, and a String representing 
the rating as its arguments, and sets the respective class properties to these values.*/

let movieDetails = new Movie("Thunivu","Zee studios", "PG-14");
console.log(movieDetails);

//output
/*
rating: "PG-14" 
studio: "Zee studios"
title: "Thunivu"
*/


//------------------------------------------------------------------------------------------------



//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

const movie1 = new Movie("Thunivu","Zee studios");
console.log(movie1);

//output
/*
rating: "PG" 
studio: "Zee studios"
title: "Thunivu"
*/

const movie2 = new Movie("Thunivu","Zee studios","PG-14");
console.log(movie2);

//output
/*
rating: "PG-16" 
studio: "Zee studios"
title: "Thunivu"
*/

//----------------------------------------------------------------------------------------------------
 


/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
 The returned array need not be full.*/

let moviee1 = new Movie("Thunivu", "Zee studios", "PG");
let moviee2 = new Movie("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Movie("Kantara", "KRG Studios", "PG");
let movie4 = new Movie("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Movie("veeram", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = moviee1.getPG(movieArray);
console.log(pgMovies); 

// Output: 
/*
[ Moviee { title: 'Thunivu', studio: 'Zee studios', rating: 'PG' },
  Moviee { title: 'Kantara', studio: 'KRG Studios', rating: 'PG' },
  Moviee { title: 'veeram', studio: 'Vijaya production', rating: 'PG' } ]
  */


//--------------------------------------------------------------------------------------------------


/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/

let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale);

/*OUTPUT:
rating: "PG-13"
studio: "Eon Productions"
title: "Casino Royale"*/