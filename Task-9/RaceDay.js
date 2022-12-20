let runnerNumber = Math.floor(Math.random()*1000);
const registeredEarly =true;
const runnerAge =2;

if(runnerAge>18 && registeredEarly){
    runnerNumber+=1000;
}

if(runnerAge>18 && registeredEarly){
    console.log(`Runner : ${runnerNumber} : Your race starts at 9:30`);
}else if(runnerAge>18 && !registeredEarly){
    console.log(`You will race at 11:00 am and your race numer is ${raceNumber}`);
}else if(runnerAge <18){
    console.log(`You will run at 12:30 pm and your race number is ${raceNumber}`);
}else if(runnerAge===18){
    console.log('Please contact to registration desk');
}