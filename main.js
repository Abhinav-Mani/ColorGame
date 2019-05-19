var boxcount=6;
var hard=document.querySelector("#hard");
var easy=document.querySelector("#easy");
var colors=generaterandomcolor(boxcount);
var boxes= document.querySelectorAll("#box div div");
var header=document.querySelector("#top1");
var play=document.querySelector("#play");
for(var i=0;i< boxes.length;i++)
{
    boxes[i].style.backgroundColor=colors[i];
}
var rc=colors[Math.floor(Math.random()*boxcount)];
document.querySelector("#top1").textContent=rc;
for(var i=0;i< boxes.length;i++)
{
    boxes[i].addEventListener("click",clickhandle)
}
function clickhandle()
{
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

}
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