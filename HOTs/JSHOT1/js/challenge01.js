
var favoriteMovies = ["The Interview", "This is the End", "Big Daddy"];                               // define our array
var newMovie = prompt('What is your favorite movie?');

while (newMovie == "" || newMovie == null)
{
    newMovie = prompt('What is your favorite movie?');
}
favoriteMovies.push(newMovie)

for (var i = 0; i < favoriteMovies.length; i++) {
    document.write(favoriteMovies[i] + "<br>");
}
