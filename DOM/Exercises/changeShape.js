// const sh=document.querySelector("#b2");
const sh = document.querySelector(".btn2");
const a = document.querySelector(".inner");
const color = ["blueviolet", "green"];
var i = 0;
sh.addEventListener('click', function () {
    (i == 1) ? i = 0 : i++;
    a.style.background = color[i];
});

const sk=document.querySelector(".btn1");
var j=1;
const t1 = document.querySelector(".triangle1");
const t = document.querySelector(".triangle");
const sq=document.querySelector(".square");
sk.addEventListener('click', function () {
    if (j==1) {
        j=0;
        sq.style.display="none";
        // t.style.display="block";
        // t.style.display="inline";
        t.style.visibility="visible";
    }
    else{
        j++;
        sq.style.display="block";
        // t.style.display="none";
        t.style.visibility="hidden";
    }
    
});