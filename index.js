document.querySelector("button").addEventListener("click",respond1);
document.querySelector("button.btn2").addEventListener("click",respond2);
document.querySelector("button.btn3").addEventListener("click",respond3);
document.querySelector("button.btn4").addEventListener("click",respond4);
document.querySelector("button.btn5").addEventListener("click",respond5);
document.querySelector("button.btn6").addEventListener("click",respond6);
document.querySelector("button.btn7").addEventListener("click",respond7);
function respond1()
{
    var audio=new Audio("tom-1.mp3");
    audio.play();
}
function respond2()
{
    var audio=new Audio("tom-2.mp3");
    audio.play();
}
function respond3()
{
    var audio=new Audio("tom-3.mp3");
    audio.play();
}
function respond4()
{
    var audio=new Audio("tom-4.mp3");
    audio.play();
}
function respond5()
{
    var audio=new Audio("snare.mp3");
    audio.play();
}
function respond6()
{
    var audio=new Audio("crash.mp3");
    audio.play();
}
function respond7()
{
    var audio=new Audio("kick-bass.mp3");
    audio.play();
}
document.addEventListener("keypress",k1);
function k1(event)
{
    if(event.key=='w'||event.key=='W')
    {
        var audio=new Audio("tom-1.mp3");
        audio.play();
    }
    if(event.key=='a'||event.key=='A')
    {
        var audio=new Audio("tom-2.mp3");
        audio.play();
    }
    if(event.key=='s'||event.key=='S')
    {
        var audio=new Audio("tom-3.mp3");
        audio.play();
    }
    if(event.key=='d'||event.key=='D')
    {
        var audio=new Audio("tom-4.mp3");
        audio.play();
    }
    if(event.key=='j'||event.key=='J')
    {
        var audio=new Audio("snare.mp3");
        audio.play();
    }
    if(event.key=='k'||event.key=='K')
    {
        var audio=new Audio("crash.mp3");
        audio.play();
    }
    if(event.key=='l'||event.key=='L')
    {
        var audio=new Audio("kick-bass.mp3");
        audio.play();
    }
}