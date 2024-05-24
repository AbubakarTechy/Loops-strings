____________________//FOR LOOP

__//Print 1 to 5
for(let i=1; i<=5 ; i++){
    console.log("Abu bakar rashhed"); //it wil print from 1 to 5
}

__//Calculate sum of 1 to 5

let sum=0;
for(i=1 ; i<=5; i++){
    sum=sum+i;
}

console.log("The sum is=" +sum);

__//Infinite Loop

for(let i=1; i>=0; i++ ){
    console.log("Abu Bakar Rasheed");
}

__________________________//WHILE LOOP

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

__________________________//DO WHILE LOOP  (aik bar chlega, agr condition glt v ho)

let j=20;
do{
    console.log("Abu Bakar");
    i++;
} while(j<=5);


____________________________//FOR- OF - LOOP 

let str="AbuBakar Rasheed"
let size = 0; // for size check
for(let value of str){
    console.log("Value is =" + value);
    size++;
}
console.log("Size is =" + size);

____________________________//FOR- IN - LOOP  (used in objects & arrays)

let student={
    name: "AbuBakar",
    age:23,
    cgpa:3.5,
    isPss:true
};
for(let key in student){
    console.log("Key=" , key, "Value=" ,student [key]);
}

___________________________//Q=1, Print All even number from 0 to 100

let num;
for(let num=0 ;num<=100 ; num++){
    if(num%2==0){
        console.log(num);
    }
}

___________________________//Q=2 GUESS NUMBER GAME

let numb=25;
let userNum=("Enter a number");

while(userNum !== numb ){
    userNum=prompt("Sorry , Enter again write number");
}
console.log("Congratulations, You enter a right number");
