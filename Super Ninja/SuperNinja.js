class Ninja{
    constructor(name,health,speed=3,strength=3){
        this.name=name;  
        this.health=health;  
        this.speed=speed;  
        this.strength=strength;  
    }
    sayName(){
        console.log("---sayName---");
        console.log(this.name);
    }
    
    showStats(){
    
        console.log("---showStats---");
        console.log(`Name:${this.name} ,Health: ${this.health} ,Speed: ${this.speed} ,Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health+=10;
        console.log("---drinkSake---");
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

class Sensei extends Ninja{
    constructor(name,wisdom=10) {
        super(name,200, 10, 10,wisdom);
        this.speed=10;
        this.strength=10;

    }
        speakWisdom(){
            this.drinkSake();
        }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"