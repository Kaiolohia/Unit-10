/*
ES5 ver
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/
/*ES2015 ver*/
function createInstructor(firstName, lastName) {
  return { firstName, lastName };
}

/*ES5 Ver 
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/
/*ES2015 ver*/
const favoriteNumber = 42;
const instructor = { firstName: "Colt", favoriteNumber };
/*ES5 ver
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/
/*ES2015 ver*/
const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  }
};

function createAnimal(species, noiseName, noise) {
    return {
        species,
        [noiseName]: function() {
            console.log(noise)
        }
    }
}

const dog = createAnimal('Dog' , 'bark', 'WOOOF')
dog.bark()