var timeLimit = 10;
var difficult = 0;
var minimum = 0;
var maximum = 1000;
var distance = 0;

const operations = ["+","-","x"];

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
        timeLimit = 30;
    }
    document.getElementById("diff_mode").innerHTML = d + '--MODE';
    document.getElementById("diff").style.display = 'none';
}


function startGame()
{
    distance = 0;
    document.getElementById("start").style.display = 'none';
    document.getElementById("timer").style.display = 'inline';
    var qt = '';
    var element1 = Math.floor(Math.random()*(maximum-minimum) + minimum);
    var element2 = Math.floor(Math.random()*(element1-minimum) + minimum);
    var idx = Math.floor(Math.random()*3);
    qt = element1 + ' ' +operations[idx] + ' ' +element2 + '_ _ _ _ _ _ _ _ _ _ _ _ _' ;
    document.getElementById("question").innerHTML = qt;
    var y =  setInterval(function() {
        document.getElementById("timer").innerHTML = distance + ' s ';
        distance++;
        if(distance==timeLimit)
        {
            clearInterval(y);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}
