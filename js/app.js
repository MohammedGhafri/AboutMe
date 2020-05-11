'use strict';

var userName= prompt('Please, What is your name ?');
var me='Mohammad_Ghafri';


var first =myName();//fisrt question
var second =myColor();//second question
var third =mySpeciality();//third question
var fourth =resident();//fourth question
var fifth =myCook();//fifth question


function myName() {

    var know = prompt('Q:1 Do you want to know my name ?  Please answer "yes" or "no"');// Q:1 check the user if he/she want me.
    var know = know.toLocaleLowerCase();// convert  Upper case to lower case.
    console.log(know);
    if (know == 'yes') {
        alert('good , That right my name is mohammad Ghafri');
        //console.log(`for qusetion :1 you do very well you enterd :`+ know);
    } else if (know == 'no') {
        alert('My Name is mohammad Ghafri');
      //  console.log(`for qusetion :1 you do very well you enterd :`+ know);
    } else {
        alert('Warning, You don\'t entered corectly, Please Just enter Yes Or no (letter case not sensitive) I\'ll let try again');
        alert('upon your wrong chioce you will choose again');
       // console.log('for question : 1 you entered '+ know+' its Wrong entry plz try again');
        myName();
    }
return know;
}

function myColor(){
var color = prompt('Q:2 do you love blue? Please answer "yes" or "no"');// q:2
var color = color.toLocaleLowerCase();
if (color == 'yes') {
    alert('Nice chioce, I love it too');
    //console.log(`for qusetion :2 you do very well you enterd :`+ color);
} else if (color == 'no') {
    alert('No problem, all colors is pretty');
   // console.log(`for qusetion :2 you do very well you enterd :`+ color);
} else {
    alert('Warning, You don\'t entered corectly, Please Just enter Yes Or no (letter case not sensitive) I\'ll let try again');
    alert('upon your wrong chioce you will choose again');
   // console.log('for question : 2 you entered '+ color+' its Wrong entry plz try again');
    myColor();
}
return color; }


function mySpeciality() {

    var speciality = prompt('Q:3 did you know my speciality at university? Please answer "yes" or "no"');//Q;3
    var speciality = speciality.toLocaleLowerCase();
    if (speciality == 'yes') {
        alert('I think you guessed it right, its Electrical engineering');
      //  console.log(`for qusetion :3 you do very well you enterd :`+ speciality);
    } else if (speciality == 'no') {
        alert('No problem, i\'ll tell you. its Electrical engineering');
       // console.log(`for qusetion :3 you do very well you enterd :`+ speciality);
    } else {
        alert('Warning, You don\'t entered corectly, Please Just enter Yes Or no (letter case not sensitive) I\'ll let try again');
        alert('upon your wrong chioce you will choose again');
       // console.log('for question : 3 you entered '+ speciality+' its Wrong entry plz try again');
        mySpeciality();
    }
return speciality;}



function resident(){
    var live = prompt('Q:4 do you know where I resident right know ?Please answer "yes" or "no"');//Q:4
    var live = live.toLocaleLowerCase();
    if (live == 'yes') {
        alert('I think you guessed it right, ya right I\'m in Ramtha');
        //console.log(`for qusetion :4 you do very well you enterd :`+ live);
    } else if (live == 'no') {
        alert('No problem, i\'ll tell you. I\'m in ramtha');
      //  console.log(`for qusetion :4 you do very well you enterd :`+ live);
    } else {
        alert('Warning, You don\'t entered corectly, Please Just enter Yes Or no (letter case not sensitive) I\'ll let try again');
        alert('upon your wrong chioce you will choose again');
       // console.log('for question : 4 you entered '+ live+' its Wrong entry plz try again');
        resident();
    }
return live;}



    function myCook(){

    var cooking = prompt('Q:5Do you know my \'Fatour\' today ?Please answer "yes" or "no"');//Q:5
    var cooking = cooking.toLocaleLowerCase();
    if (cooking == 'yes') {
        alert('I think you guessed it right, ya right I\'m its Mansaf, tfadel.');
       // console.log(`for qusetion :5 you do very well you enterd :`+ cooking);
    } else if (cooking == 'no') {
        alert('No problem, i\'ll tell you. its mansaf');
       // console.log(`for qusetion :5 you do very well you enterd :`+ cooking);
    } else {
        alert('Warning, You don\'t entered corectly, Please Just enter Yes Or no (letter case not sensitive) I\'ll let try again');
        alert('upon your wrong chioce you will choose again');
       // console.log('for question : 5 you entered '+ cooking+' its Wrong entry plz try again');
        myCook();
    }
return cooking;}



    var input = prompt('Q:6 (additional question)which one do you love ? cats Or Cars Or trees Or fashions');
    var input = input.toLocaleLowerCase();
    switch (input) {
        case 'cats':
            alert('Nice choice,They can lower your risk of heart disease.');
            break;
        case 'cars':
            alert('Your awesome, world of cars is great');
            break;
        case 'tress':
            alert('Quiet person, Have a nice day');
            break;
        case 'fashion':
            alert('You are organized and stylish');
            break;
        default:
            alert('If you don\'t like cats Or Cars Or trees Or fashions then you are mystriouse');

    }
    /*the last line command is alrt all the previous things*/
    alert(`Welcom : ${userName} .But my name is ${me} and When I asked you If I like blue You said ${second} .And When I asked You If you know mySpeciality You said ${third} . And when I asked you If You Know My place of residence you said ${fourth} .But when i asked you if you know something about my fatour you said ${fifth}`);
 