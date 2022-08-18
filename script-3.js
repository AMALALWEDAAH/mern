class Player {
  constructor(name, job, hp, str, int, armor, spells) {
    this.name = name;
    this.job = job;
    this.hp = hp;
    this.str = str;
    this.int = int;
    this.armor = armor;
    this.spells = spells;
  }
  punch(target) {
    if (Math.ceil(Math.random() * 10 + this.str) < target.armor) {
      console.log(`${this.name} missed ${target.name} with a punch`);
    } else {
      target.hp -= 1;
      console.log(
        `${this.name} has dealt 1 damage to ${target.name}. ${target.name} has ${target.hp} health remaining!`
      );
    }
  }
}
class Fighter extends Player {
  constructor(name) {
    super(name, "Fighter", 10, 8, 3, 8, 0);
  }
  sword(target) {
    if (Math.ceil(Math.random() * 10 + this.str) < target.armor) {
      console.log(`${this.name} missed ${target.name} with a sword attack!`);
    } else {
      let damage = Math.ceil(Math.random() * this.str);
      target.hp -= damage;
      console.log(
        `${this.name} has dealt ${damage} damage to ${target.name}. ${target.name} has ${target.hp} health remaining!`
      );
    }
  }
}

class Wizard extends Player {
  constructor(name) {
    super(name, "Wizard", 3, 3, 10, 3, 8);
  }
}

class Bard extends Player {
  constructor(name) {
    super(name, "Bard", 7, 6, 6, 6, 2);
  }
}

// var player1 = new Player("player1","player",10,5,0,7,0)
// var player2 = new Player("player2","player",10,5,0,7,0)

// while(player1.hp>0 && player2.hp>0){
//     player1.punch(player2)
//     player2.punch(player1)
// }

var player1 = new Fighter("player1");
var player2 = new Fighter("player2");
player2.punch(player1);
player1.sword(player2);
// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
rl.question("What is your name\n", function (string) {
  userInput = string;

  console.log("Your name is " + userInput);

  // close input stream
  rl.close();
});
