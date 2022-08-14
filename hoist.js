

//1
console.log(hello);  // logs undefined                                  
var hello = 'world';                                 

console.log(hello); //'hello' not inisialized yet                            
let hello = 'world';     


//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}// magnet

let needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}// magnet

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);//super cool

let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);//super cool

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//chicken
//half-chicken

let food = 'chicken';
console.log(food);
eat();
function eat(){
    let food = 'half-chicken';
    console.log(food);
     food = 'gone';
}//chicken


const food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    const food = 'gone';
}//chicken

//5
mean();//mean is not a function
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


//6
console.log(genre);// logs undefined               
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//rock
//r&b
//disco


//7
dojo = "san jose";
console.log(dojo);//san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);//seattle
    var dojo = "burbank";
    console.log(dojo);//burbank
}
console.log(dojo);//san jose
//8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";//error
    }
    return dojo;
}