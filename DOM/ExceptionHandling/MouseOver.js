const outer=document.querySelector('.outer');

outer.addEventListener('mouseover',function(){
    console.log('Mouse-Over');
});

outer.addEventListener('mouseout',function(){
    console.log('Mouse-Out');
});

const k=document.querySelector('input');
k.addEventListener('keypress',function(){
    console.log('Key pressed')
});

// for enablink keypress in entire doc

// document.addEventListener('keypress',function(){
//     console.log('Key pressed')
// });

const t=document.querySelector('input');
t.addEventListener('keydown',function(event){
    console.log('Key pressed',event.keyCode)
});