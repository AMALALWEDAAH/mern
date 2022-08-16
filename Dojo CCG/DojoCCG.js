//main class
class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}


//extend class Unit
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power =power;
        this.res=res;
    }
    attack(target){
        target.res-=this.power;
    }
}

//extend class Effect
class Effect extends Card{
    constructor(name,cost,text,stat,magnirude){
        super(name,cost);
        this.magnirude=magnirude;
        this.stat=stat;
        this.text=text;
    }
    play( target ) {
        if( target instanceof Unit ) {
        // implement card text here
        if (this.stat== "resilience") {
            target.res+=this.magnirude;
        }else if(this.stat== "power"){
            target.res+=this.magnirude;
        }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

///Unit
var RedBeltNinja=new Unit("Red Belt Ninja",3,3,4);
var BlackBeltNinja=new Unit("BlackBeltNinja",4,5,4);

///Effect
var HardAlgorithm=new Effect("HardAlgorithm",2,"increase target's resilience by 3","resilience",3);
var UnhandledPromiseRejection=new Effect("UnhandledPromiseRejection",1,"reduce target's resilience by 2","resilience",-2);
var PairProgramming=new Effect("PairProgramming",3,"increase target's power by 2","power",2);

//play
console.log("-----Hard Algorithm play on Red Belt Ninja----")
console.log(RedBeltNinja);
HardAlgorithm.play(RedBeltNinja);
console.log(RedBeltNinja);
console.log("-----Unhandled Promise Rejection play on Red Belt Ninja----")
console.log(RedBeltNinja);
UnhandledPromiseRejection.play(RedBeltNinja);
console.log(RedBeltNinja);
console.log("-----Hard Algorithm play on Red Belt Ninja----")
console.log(BlackBeltNinja);
PairProgramming.play(RedBeltNinja);
console.log(BlackBeltNinja);
console.log("-----Hard Algorithm attack on Red Belt Ninja----")
console.log(RedBeltNinja);
console.log(BlackBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);
console.log(BlackBeltNinja);