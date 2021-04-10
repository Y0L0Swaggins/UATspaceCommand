// creating a countdown function to count from 10 to 0, and then blast off.
function countDown() { // remember to camel type. I keep forgeting to with words like countDown.
    var count = 10;
    //starting countdown at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;

    //then going to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000); //value is set tin miliseconds, so 1000 miliseconds is one second

    // then 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //copy and paste but changed the value again to two seconds. 

    // then 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); // same stuff, but just keep in mind the number you're counting down from is not equal to the timer

    // now 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); // four seconds now and timer is at six, still counting down.

    // next is 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); // we are continuing. count = count -1 is just the same. its editing the original variable set

    // followed by 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    // you guesed it, 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    //no way, 2???
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    // this SHOULD be 1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    //blastoff
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = 'Blastoff!!!';
        count = count - 1;
    }, 10000); // so no longer count=-1 we changed it to words.
    // also notice here the milisecond value. That is what it looks like for a 10 second


}

function playCraps(){ //This is creating a new addition to the page. You can play Craps and gamble
    var die1; //We are declaring our variables, this instance is two dice to be "rolled"
    var die2; //The names are chosen simply as die 1 and die2
    var sum; // this variable is being made so that you can identify the total of the two rolled dice
    die1 = Math.ceil(Math.random()*6); //This confusing thing is what is actually making each dice"role"
    die2 = Math.ceil(Math.random()*6);// the ceil prevents incomplete numbers, and the *6 makes it a 6 sided dice
    sum= die1+die2; // This part is where we are generating our results from the dice role
    document.getElementById("die1Res").innerHTML = die1; // this is recieving the results from first dice's role
    document.getElementById("die2Res").innerHTML = die2; // This is recieving the results from the second dice's role
    document.getElementById("sumRes").innerHTML = sum; // this is recieving the results combined from both dice

    if(sum == 7 || sum == 11){ // These are the rules for deciding win, lose, or push
        document.getElementById("crapsResults").innerHTML = "Craps! You Lose!"; // Here we state if you role 7 or eleven you loose
    }
    else if(die1 == die2 && die1%2 == 0){ // here we we state if it's not 7 or eleven, AND its even you win.
        document.getElementById("crapsResults").innerHTML = "Doubles, You Win!"; //Basically doubles with even numbers to win
    } else {
        document.getElementById("crapsResults").innerHTML = "Push! Please try again.";} // here we say everything else is a re-role.
} 