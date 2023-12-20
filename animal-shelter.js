const animalData = require('./animal-data.json');

class Animal 
{
    constructor(name,species,color,hunger)
    {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;
    }

    greet(greetings = 'hello')
    {
        return `${greetings}, I'm ${this.name}`;
    }

    feed()
    {
        this.hunger -= 20;
        return 'Yum, I love food';
    }

}

class Cat extends Animal
{
    constructor(name, color, hunger)
    {
        super(name, 'cat' , color, hunger);
        this.food = 'fish';
    }

    greet()
    {
       return super.greet('Meow') + ` and I'm a ${this.species}`;
    }

    feed()
    {
        this.hunger -= 20;
        return `Yum, I love ${this.food}`;
    }
}

class Dog extends Animal
{
    constructor(name, color, hunger)
    {
        super(name, 'dog' ,color, hunger);
        this.food = 'kibble';
    }

    greet()
    {
       return super.greet("Woof") + ` and I'm a ${this.species}`;
    }

    feed()
    {
        this.hunger -= 20;
        return `Yum, I love ${this.food}`;
    }
}

const an = new Animal("pepe", "tiger", "orange with black stripes", 100);

// console.log(an);
// console.log(an.greet());
// console.log(an.feed());
// console.log(an.hunger);

// const ca = new Cat("pepe","orange", 100);
// console.log(ca.greet());
// const d = new Dog("pepe","orange", 100);
// console.log(d.greet());

class AnimalShelter
{
    constructor()
    {
        this.animals = [];
    }

    addAnimal(newAnimal = new Animal)
    {
        this.animals.push(newAnimal);
    }

    adopt(adoptedAnimal)
    {
        const animalIndex = this.animals.indexOf(adoptedAnimal);
        this.animals.splice(animalIndex,1);
    }

    getAnimalsBySpecies(species)
    {
       return this.animals.filter(a => a.species === species);
    }

}

const shelter = new AnimalShelter();

for(const an of animalData)
{

    let animal;
    if(an.species == "dog")
    {
         animal = new Dog(an.name, an.color, an.hunger);
    }
    else if(an.species == "cat")
    {
         animal = new Cat(an.name, an.color, an.hunger);
    }
    else
    {
         animal = new Animal(an.name, an.species, an.color, an.hunger);
    }
    
    if(!animal.hunger)
    {
        animal.hunger = 50;
    }

    shelter.addAnimal(animal);
}

//console.log(shelter.animals);

// for(const a of shelter.animals)
// {
//     console.log(a.greet());
//     console.log(a.feed());
// }

console.log(shelter.getAnimalsBySpecies('dog'));
