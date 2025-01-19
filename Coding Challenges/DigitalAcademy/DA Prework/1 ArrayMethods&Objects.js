// Arrays, array methods and Objects

// Pop and switch element
let arrayName = ["cat", "dog", "bird"]
console.log(arrayName[0]);
console.log(arrayName.push("racoon"));
arrayName.pop()
arrayName[1] = "veggie burgers";
console.log(arrayName)

// Push
const luckyNumbers = [13, 42, 7, 28];
luckyNumbers[0] = 99;
luckyNumbers[2] = luckyNumbers[0] - luckyNumbers[2];
console.log(luckyNumbers); // [99, 42, 92, 28]

// Pop
const myHobbies = ["basket weaving", "hot yoga", "film noir movies"];
myHobbies.pop();
myHobbies.push("fantasy novels");
console.log(myHobbies);

const numbers = [10, 20, 30, 40];
console.log(numbers.length); // => 4 elements in the array

let favoriteFoods = ["Mexican", "Italian", "Japanese"];
favoriteFoods.push("American", "Chinese")
console.log(favoriteFoods)
favoriteFoods.pop("Chinese");
console.log(favoriteFoods)
console.log(favoriteFoods.length);

// key/value pairs
const aboutMe = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};
console.log(aboutMe.name)

let aboutMe2 = {
   name: "Rosa",
  age: 20,
  food: ["Enchiladas", "Pizza", "Hamburger"],
}
console.log(aboutMe2);
console.log(aboutMe2.age);
aboutMe2.dreamJob = "political activist";
console.log(aboutMe2);

const aboutMe3 = {
};
 aboutMe3.name = "Rosa2"
  aboutMe3.age = 21
  console.log(aboutMe3);

// Object Array Push & Pop
const ingredients = ["Sugar", "Spice", "Everything Nice"];
ingredients.push("Chemical X")
console.log(ingredients);

const breakfast = ["Biscuits and Gravy", "Pancakes", "Huevos Rancheros"];
breakfast.pop("Huevos Rancheros")
console.log(breakfast)
breakfast.pop("Pancakes")
breakfast.pop("Biscuits and Gravy")
console.log(breakfast)
breakfast.push("Huevos Rancheros");
console.log(breakfast)
breakfast.push("Pancakes");
console.log(breakfast)
breakfast.push("Biscuits and Gravy");
console.log(breakfast)

// Change the element in an array
const artist = {
  name: "Star Struck",
  talents: ["singing", "dancing"],
   albumsRecorded: 2, 
}
console.log(artist)

const player = {
  health: 50,
  points: 750
};
player.health = 0;
player.points = 950;
console.log(player)