
const inner=document.querySelector('.inner');
inner.addEventListener('click',function(){
    console.log('Clicked on inner div');
});

// Clicked on inner div
// Clicked on outer div
// Clicked on Document

const outer=document.querySelector('.outer');
outer.addEventListener('click',function(){
    console.log('Clicked on outer div');
});
// Clicked on outer div
// Clicked on Document

document.addEventListener('click',function(){
    console.log('Clicked on Document');
});
// Clicked on Document