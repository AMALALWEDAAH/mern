class Ninja {
    constructor(name,heath,speed,strength){
    this.name=name;  
    this.heath=heath;  
    this.speed=3;  
    this.strength=3;  
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
}



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();