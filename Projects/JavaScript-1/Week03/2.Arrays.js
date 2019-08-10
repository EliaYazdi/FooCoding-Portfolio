let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals);
// Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
/*favoriteAnimals = ["blowfish", "capricorn", "giraffe", "Mauro\'s favorite animal [turtle]"];
console.log(favoriteAnimals);*/
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
/*2.3 Now add Jim's favorite animal to the array, it's 'meerkat',
 but make sure it will be placed after 'blowfish' and before 'capricorn'.*/
favoriteAnimals.splice(0, 1, "Meerkat");
console.log("the array will have 'Meerkat' between 'blowfish' and 'capricorn");
console.log(favoriteAnimals);

//2.6 Log the length of the array, add a message:
favoriteAnimals.length;
console.log("The array has a length of: " + favoriteAnimals.length);

//2.7  delete the giraff from the array
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

//2.9 the position or the index of Meerkat in the array
for (let i = 0; i < favoriteAnimals.length; i++) {
    if (favoriteAnimals[i] === 'meerkat') {
        console.log('The index of "meerkat" is ' + i + '.');
    }
}