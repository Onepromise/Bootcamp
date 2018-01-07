var movies = [
  {
    title: "Frozen",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Mad Max",
    hasWatched: false,
    rating: 3.5
  },
];
 movies.forEach(function(movie){
   var result ="You have ";
   if (movie.hasWatched){
     result += "watched ";
   }else {
     result += "not seen ";
   }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
   console.log(result)
 })
