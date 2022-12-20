let userName='Jonny';
userName? console.log(`Hello ${userName}!`): console.log('Hello!');

const userQuestion="will i become a Hero";
console.log(`The user asked: ${userQuestion}`);
const randomNumber = Math.floor(Math.random()*8);

let eightBall='';
if(randomNumber==0){
    console.log('The eight ball answered : It is certain');
}else if(randomNumber==1){
    console.log('The eight ball answered : It is decidedly so');
}else if(randomNumber==2){
    console.log("THe eight ball answered : Reply hazy try again");
}else if(randomNumber==3){
    console.log("The eight ball answered : Cannot predict now");
}else if(randomNumber==4){
    console.log("The eight ball answered : Do not count on it");
}else if(randomNumber==5){
    console.log("The eight ball answered : My sources say no");
}else if(randomNumber==6){
    console.log('The eight ball answered : Outlook not so good');
}else if(randomNumber==7){
    console.log("The eight ball answered : Signs point to yes");
}else{
    console.log("magic ball is broken");
};
