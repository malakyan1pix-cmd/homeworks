class Animal{
    constructor(){}
    speak(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    constructor(){
        super();
    }
    speak(){
        super.speak();
        console.log("Dog barks");
    }
}

const d = new Dog();
d.speak();

// Вывод:
// Animal makes a sound
// Dog barks