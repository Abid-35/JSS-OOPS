let arr1 =[1,2,3];
let arr2 =[5,4,6];
console.log(arr1);
 arr1.sayhello =()=> {
    console("i  am a array");
};
arr2.sayhello =()=> {
    console("i  am a array");
};
console.log(arr1.sayhello===arr2.sayhello); // Output is false 

let arr3 = [15,6,20];
//refernce proto
arr3.__proto__.push=(n)=>{
    console.log(`pushing the number :${n}`);
};
let p = arr3.push(5);
console.log(p);
console.log(arr3);
// for actual the syntax is datatype name.prototype
//example array.prototype.push=()=>{//do something}; It is not a good work to modify the prototype of an actual object

//Factory function 
function personmaker(name,age){
    const person ={
        name : name,
        age:age,
    
    Talk(){
        console.log(`I am ${this.name}!`);
    }
    }
    return person;
}

let man1 = personmaker("Abid",21);
console.log(man1);
let man2 = personmaker("fun",23);
console.log(man2);
console.log(man1.Talk === man2.Talk); //output is false 

//constructors

function Car(brand , year ) {
this.brand = brand;
this.year = year;
}

Car.prototype.say = function() {
    console.log(`Mine is ${this.brand} car `);
}

let mine = new Car("Toyata",2021);
console.log(mine);
let mine1 = new Car("BMW",2022);
console.log(mine1);
console.log(mine.say===mine1.say); // output is true 

// class

class Book{
    constructor( title ,author){
        this.author=author;
        this.title=title;
    }
    fav(){
        console.log(`This is my favourite ${this.title} book `);
    }

}

let mine2 = new Book("Rich Dad Poor Dad ","Robert Kiyosaki");
console.log(mine2);
let mine3 = new Book("The Intelligent Investor","Warren Buffett");
console.log(mine3);
console.log(mine2.fav===mine3.fav); // output is true 

//Inheritance

class people{
    constructor(full_name,age){
       this.full_name = full_name;
       this.age = age;
    }
    known(){
        console.log(`I AM ${this.full_name}`);
    }
}

class student extends people{
    constructor(full_name,age,marks){
        super(full_name,age);
        this.marks = marks;
    }
}

class teacher extends people{
    constructor(full_name,age,subject){
        super(full_name,age);
        this.subject = subject;
    }
}

let  unknown = new  people("Manoj" ,23 );
console.log(unknown);


let  child  =  new student("Karthik" ,20 ,96 );
console.log(child);


let mam = new teacher("Veena" ,23 );
console.log(mam);

console.log(unknown.known===child.known===mam.known); //output is flase because unknown.known===child.known == true as output and 
// then comparsion btw boolean and function returns false i.e : true ===mam.known so...

console.log(unknown.known === child.known); // output is true
console.log(child.known === mam.known);     // output is true
console.log(unknown.known === mam.known);   // output is true

//or  

console.log(
    unknown.known === child.known && 
    child.known === mam.known
  ); // true 
  