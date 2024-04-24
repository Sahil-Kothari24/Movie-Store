let a=prompt("Enter your name","Guest")
document.getElementById("box1").innerHTML=`Hello ${a}, nice to meet you :)`

let b=prompt("Where do you live?","city name")
document.getElementById("box2").innerHTML=`Well how is the weather in ${b}?`

var c=document.getElementById("main");
var display=1;

function hideShow()
{
    if(display==1)
    {
        c.style.display='block';
        display=0;
    }
    else
    {
        c.style.display='none';
        display=1;
    }
}

let d=new Date;
document.getElementById("main1").innerHTML=d;

var e=document.getElementById("main1");
var display=1;

function showhide()
{
    if(display==1)
    {
        e.style.display='block';
        display=0;
    }
    else
    {
        e.style.display='none';
        display=1;
    }
}

var f=document.getElementById("main2");
var display=1;

function showHide()
{
    if(display==1)
    {
        f.style.display='block';
        display=0;
    }
    else
    {
        f.style.display='none';
        display=1;
    }
}

var g=document.getElementById("main3");
var display=1;

function hideshow()
{
    if(display==1)
    {
        g.style.display='block';
        display=0;
    }
    else
    {
        g.style.display='none';
        display=1;
    }
}

function first()
{
    alert("Why do you want to know about us!??")
}
function second()
{
    alert("The form entries have been reset")
}
