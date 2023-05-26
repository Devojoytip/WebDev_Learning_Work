const d=document.querySelector('div');

d.addEventListener('click',function(event){

    console.log(event);
    let i=event.target;
    console.log(i);

    i=event.target.className;
    console.log(i);

    i=event.target.classList;
    console.log(i);

    i=event.target.id;
    console.log(i);

    let dirY=event.offsetY;
    let dirX=event.offsetX;
    console.log(dirX,dirY);
});