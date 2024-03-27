var timeLimit = 10;
var difficult = 0;
var minimum = 0;
var maximum = 1000;
var distance = 0;
var score = 0;
const operations = ["+","-","*"];

function showDetails()
{
    var n = document.getElementById("name").value;
    document.getElementById("greetings").style.display = "block";
    document.getElementById("greet").innerHTML = 'Hello !! ' + n + ' Choose your difficulty level';
    document.getElementById("greet").style.color = "white";
    // document.getElementById("butt2").style.backgroundColor = "white";
}

function addDiff()
{
    document.getElementById("greet").innerHTML = 'Hello !! ' + document.getElementById("name").value ;
    difficult = document.getElementById("diff").value;
    var d = '';
    if(difficult==1)
    {
        d = 'EASY';
        timeLimit = 60;
        maximum = 10;
    }
    else if (difficult==2){
        d = 'MEDIUM';
        timeLimit = 45;
        maximum = 25;
    }
    else
    {
        maximum = 100;
        d = 'HARD';
        timeLimit = 10;
    }
    document.getElementById("diff_mode").innerHTML = d + '--MODE';
    document.getElementById("diff").style.display = 'none';
}


var y;

function startGame()
{
    distance = 0;
    document.getElementById("start").style.display = 'none';
    document.getElementById("timer").style.display = 'inline';
    document.getElementById("ans").style.display = 'inline';
    document.getElementById("score").style.display = 'inline';
    document.getElementById("answer").value = '';
    var qt = '';
    var element1 = Math.floor(Math.random()*(maximum-minimum) + minimum);
    var element2 = Math.floor(Math.random()*(element1-minimum) + minimum);
    var idx = Math.floor(Math.random()*3);
    qt = element1 + ' ' +operations[idx] + ' ' +element2 + '_ _ _ _ _ _ _ _ _ _ _ _ _' ;
    document.getElementById("question").innerHTML = qt;
    y =  setInterval(function() {
        document.getElementById("timer").innerHTML = distance + ' s ';
        distance++;
        if(distance==timeLimit)
        {
            nextQuestion();
            clearInterval(y);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function nextQuestion()
{
    var qt = document.getElementById("question").innerHTML;
    var ans = document.getElementById("answer").value;
    var q = '';
    var l = qt.length;
    for(var i=0;i<l;i++)
    {
        if(qt.charAt(i)!='_')
            q+=qt.charAt(i);
        else break;
    }
    var num = eval(q);
    var m = Number(num);
    var a = Number(ans);
    clearInterval(y);
    if(m==a && distance<timeLimit)
    {
        score+=(timeLimit-distance)*(difficult);
        document.getElementById("score").innerHTML = "Your score is " + score ;
    }
    else{
        score-=(timeLimit-distance)*(difficult);
        document.getElementById("score").innerHTML = "Your score is " + score ; 
    }
    startGame();
}
