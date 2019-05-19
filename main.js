var boxcount=6;
var rc;
var play;
boxsetup();
easy.addEventListener("click",function(){
    boxcount=3;
    document.querySelector("#downbox").style.display="none";
    boxsetup();
    document.querySelector("#top1").style.background="linear-gradient(to right,red,green,yellow)";
    play.textContent="Play";
});
hard.addEventListener("click",function(){
    boxcount=6;
    document.querySelector("#downbox").style.display="block";
    boxsetup();
    document.querySelector("#top1").style.background="linear-gradient(to right,red,green,yellow)";
    play.textContent="Play";
});
function generaterandomcolor(num)
{
    var c=[];
    for(var i=0;i< num;i++)
    {
        c[i]=getcol();
    }
    return c;
}
function getcol()
{
    return "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
}
function boxsetup()
{
var hard=document.querySelector("#hard");
var easy=document.querySelector("#easy");
var colors=generaterandomcolor(boxcount);
var boxes= document.querySelectorAll("#box div div");
var header=document.querySelector("#top1");
play=document.querySelector("#play");
for(var i=0;i< boxcount;i++)
{
    boxes[i].style.backgroundColor=colors[i];
    boxes[i].addEventListener("click",function(){
        if(this.style.backgroundColor == rc)
    {
        header.style.background="linear-gradient("+rc+","+"#fff"+")";
        for(var i=0;i< boxes.length;i++)
        {
            boxes[i].style.backgroundColor=rc;
        }
        play.textContent="YOU won!!!!!"   
        
    }
    else
    {
        this.style.backgroundColor="rgb(255, 255, 255)";
        this.style.border="none";
        play.textContent="OPssie! TRy aGain!";
    }
    });
}
rc=colors[Math.floor(Math.random()*boxcount)];
document.querySelector("#top1").textContent=rc;
}