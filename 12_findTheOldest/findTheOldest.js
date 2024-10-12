const findTheOldest = function(person) {
    let oldest = 0;
    let oldestName = '';
    for (let i = 0; i < person.length; i++){
        let age = person[i].yearOfDeath - person[i].yearOfBirth;
        if (age > oldest){
            oldest = age;
            oldestName = person[i].name;
        }
    }
    console.log(oldestName);
    return oldestName;

};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);
console.log(people.length);
// Do not edit below this line
//module.exports = findTheOldest;
