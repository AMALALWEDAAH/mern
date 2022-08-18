class Card{
    constructor(){
        this.name="";
    }
    setcard(name){
        this.name = name;
    }
    attack(target){
        if(this.name == "1")
            target.health-=5;
        else if(this.name == "2")
        target.health+=5;
        else if(this.name == "3")
        target.health-=10;
        else if(this.name == "4")
        target.health+=10;
        else if(this.name == "5")
        target.health-=50;
        else if(this.name == "6")
        target.health+=50;
        else if(this.name == "7")
        target.health-=30;
        else if(this.name == "8")
        target.health+=60;
        else if(this.name == "9")
        target.health-=60;
        else if(this.name == "10")
        target.health+=30;


}

}
class Player extends Card{
    constructor(name){
        super(name);
        this.health=0;
    }
    setname(name){
        this.name = name;
    }
}

const readline = require("readline");
const read1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const player1 = new Player();
const player2= new Player();
let card1 = new Card();
let card2 = new Card();

read1.question("Player1 enter your name: ", function (answer) {
    player1.setname(answer)
    read1.question("Player2 enter your name: ", function (answer) {
        player2.setname(answer);

        read1.question(`Choose card number to attack ${player2.name}? 1 to 10 `, function (answer){
            card1.setcard(answer);
            card1.attack(player2)
            console.log(`${player2.name}'s health: ` + player2.health);

            read1.question(`Choose card number to attack ${player1.name}? 1 to 10 `, function (answer){
                card2.setcard(answer);
                card2.attack(player1)
                console.log(`${player1.name}'s health: ` + player1.health);
                if(player1.health > player2.health){
                    console.log(`${player1.name} won`);
                }else if(player1.health < player2.health){
                    console.log(`${player2.name} won`);
                }else if(player1.health == player2.health) {
                    console.log("all player are tied");
                }
                });
        });
            
        });
        
    });
