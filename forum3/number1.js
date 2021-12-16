// forum 3 HCI
//William Jonathan Mulyadi NIM: 2502045683
// JavaScript Practice 1
import readlineSync from "readline-sync";
const blood = readlineSync.question("What blood type are you?");
const who = readlineSync.question("To Whom you want to donor your blood?");

var donateblood =(blood,who) =>{
    if (blood == "A+"){
        if ((who == "A+") || (who =="AB+")){
            console.log(`canGiveBlood("${blood}","${who}") -> true`);
        }
        else{
            console.log(`canGiveBlood("${blood}","${who}") -> false`);
        }
    }
    else if (blood =="A-"){
        if((who == "A-") || (who == "A+") || (who =="AB-") || (who =="AB+")){
            console.log(`canGiveBlood("${blood}","${who}") -> true`);
        }
        else{
            console.log(`canGiveBlood("${blood}","${who}") -> false`);
        }
    }
    else if (blood == "O+"){
        if((who == "O+") || (who == "A+") || (who == "B+") || (who == "AB+")){
            console.log(`canGiveBlood("${blood}","${who}") -> true`);
        }
        else{
            console.log(`canGiveBlood("${blood}","${who}") -> false`);
        }
    }
    //"O-" can give blood to anyone
    else if (blood == "O-"){
        console.log(`canGiveBlood("${blood}","${who}") -> true`);
    }
    else if (blood == "B-"){
        if((who == "B-") || (who == "B+") || (who =="AB-") || (who =="AB+")){
            console.log(`canGiveBlood("${blood}","${who}") -> true`);
        }
        else{
            console.log(`canGiveBlood("${blood}","${who}") -> false`);
        }
    }
    else if (blood == "B+"){
        if((who == "B+") || (who =="AB+")){
            console.log(`canGiveBlood("${blood}","${who}") -> true`);
        }
        else{
            console.log(`canGiveBlood("${blood}","${who}") -> false`);
        }
    }
    else if (blood == "AB-"){
        if((who == "AB-") || (who == "AB+")){
            console.log(`canGiveBlood("${blood}","${who}") -> true`);
        }
        else{
            console.log(`canGiveBlood("${blood}","${who}") -> false`);
        }
    }
    else if (blood == "AB+"){
        if(who == "AB+"){
            console.log(`canGiveBlood("${blood}","${who}") -> true`);
        }
        else{
            console.log(`canGiveBlood("${blood}","${who}") -> false`);
        }
    }
}
