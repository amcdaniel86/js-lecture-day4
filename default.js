const nums = [1,2,3,4,5,6,7,8,9];

const plusOne = [];
nums.forEach((eachNumber)=>{
  plusOne.push(eachNumber + 1);
})

console.log(plusOne);

const plusOne = nums.map((eachSingleNumber)=>{
  return eachSingleNumber + 1;
})
  

console.log(plusOne);

const users = [
{name: 'guy', age:35, occupation: 'world of warcraft', favColor: 'blue'};
{name: 'guy', age:35, occupation: 'world of warcraft', favColor: 'blue'};
{name: 'guy', age:35, occupation: 'world of warcraft', favColor: 'blue'};
{name: 'guy', age:35, occupation: 'world of warcraft', favColor: 'blue'};
]

const trimmedUsers = users.map((eachUser)=>{
  const newUser = {};
  newUser.name = eachUser.name;
  newUser.occupation = eachUser.occupation;
  return newUser;
})

console.log(trimmedUsers);

const cities = ['miami', 'barcelona', 'sacramento', 'atlanta', 'amsterdam'];

const capitalizedCities = cities.map((oneCity)=>{

  let firstLetter = oneCity[0].toUpperCase();
  let restOfWord = oneCity.substr(1);

return firstLetter+restOfWord

})

console.log(capitalizedCities);

let numbers = [1,9,8,2,3,7,6,4,5,5,2,8,7,3,4,6];

let total = 0;
numbers.forEach((eachNum)=>{
  total +=eachNum
})

console.log(total)

let total = numbers.reduce((total, eachNum)=>{
 
  return total + eachNum

}, 0)

console.log(total)

let people = [
  { name: "Candice", age: 25 },
  { name: "Tammy",   age: 30 },
  { name: "Allen",   age: 49 },
  { name: "Nettie",  age: 21 },
  { name: "Stuart",  age: 17 }
];


const avgAgeOfOldPeople = people.filter((person)=>{
  if(person.age >= 21){
    return person
  }
},0)
console.log(avgAgeOfOldPeople)




  let oldPeople = [];
  people.forEach((person)=>{

    if(person.age >= 21){
    oldPeople.push(person);
    }
  })

  console.log(oldPeople);


  var words = [22,27,5,7,3,9,10,12,8,];

words.sort(function(a, b){
    if (a > b){
        return -1;
    }

    if (a < b){
        return 1;
    }

    return 0;
});

console.log(words);
[ 'a', 'Third', 'Second', 'Hello', 'Goodbye', 'First', 'A' ]

let nums = [1,2,3,4,5,6,];

nums.reverse()