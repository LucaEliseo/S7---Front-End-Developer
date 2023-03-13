
// Esercizio 1

class User {
    constructor(firstName , lastName , age , location) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }


ageCount(otherUser){
    if(this.age < otherUser.age) {
        return this.firstName + " è più giovane di " + otherUser.firstName;
    } else if(this.age > otherUser.age){
        return this.firstName + " è più vecchio di " + otherUser.firstName;
    }else{
        return this.firstName + " ha la stessa età di " + otherUser.firstName;
    }
}

}

const user1 = new User("Luca" , "Eliseo" , 25 , "Napoli")
const user2 = new User("Mario","Rossi", 15 ,"Milano")
console.log(user1.ageCount(user2));

// Esericizio 2

class Pet {
    constructor(petname, ownername, species, breed) {
      this.petname = petname;
      this.ownername = ownername;
      this.species = species;
      this.breed = breed;
    }

    hasSameOwner(otherPet) {
      return this.ownername === otherPet.ownername;
    }
  }

  const form = document.getElementById('pet-form');
  const petList = document.getElementById('pet-list');
  const pets = [];

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const petname = form.elements.petname.value;
    const ownername = form.elements.ownername.value;
    const species = form.elements.species.value;
    const breed = form.elements.breed.value;
    const pet = new Pet(petname, ownername, species, breed);
    pets.push(pet);
    form.reset(); 

    
    const li = document.createElement('li');
    li.textContent = `${pet.petname} (${pet.species}) di ${pet.ownername}`;
    petList.appendChild(li);
  });
