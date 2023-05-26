
const inner=document.querySelector('.inner');
inner.addEventListener('click',function(event){
    console.log('Clicked on inner div');
    event.stopPropagation();
});

// Clicked on inner div


const outer=document.querySelector('.outer');
outer.addEventListener('click',function(event){
    console.log('Clicked on outer div');
    event.stopPropagation();
});
// Clicked on outer div

document.addEventListener('click',function(){
    console.log('Clicked on Document');
});
// Clicked on Document