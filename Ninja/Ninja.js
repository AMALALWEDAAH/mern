class Ninja {
    constructor(name,heath,speed=3,strength=3){
    this.name=name;  
    this.heath=heath;  
    this.speed=speed;  
    this.strength=strength;  
    }
    sayName(){
        console.log("---sayName---");
        console.log(this.name);
    }

    showStats(){
        this.heath=0;
        console.log("---showStats---");
        console.log(this.name);
        console.log(this.heath);
        console.log(this.speed);
        console.log(this.strength);
    }
    drinkSake(){
        this.heath+=10;
    }
}



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();