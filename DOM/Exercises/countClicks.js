const divv=document.querySelector('div');
var count=0;
// const sp=document.getElementsByTagName('span');
const sp=document.querySelector('span');

divv.addEventListener('click',function(){
    count++;
    console.log(count);
    sp.innerText=" "+count;
});
