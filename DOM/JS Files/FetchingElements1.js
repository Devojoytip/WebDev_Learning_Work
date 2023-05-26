const a=document.querySelectorAll('li,h1');
console.log(a);

// attributes
const b=document.querySelector('li');

const att1=b.getAttribute('random');
console.log(att1);

const s=b.setAttribute('random','100');
console.log(s);
console.log(b);

// className and classList

const t=document.querySelector('h1');
const c=t.className='cool-title';
console.log(c);

const hello=document.querySelector('h2');
const cl=hello.classList;
console.log(cl);

cl.add('cool-title');
console.log(cl);

cl.add('dashing','bd');
console.log(cl);

// cl.remove('cool-title');
// console.log(cl);

//instead of removing we can toggle a class
// when we toggle a class for 1st time it gets disabled
// then for 2nd time it gets enabled
// 3rd time : disabled and so on
cl.toggle('cool-title');
console.log(cl);

cl.toggle('cool-title');
console.log(cl);

cl.toggle('cool-title');
console.log(cl);

// inner HTML
const x=document.querySelector('h3').innerHTML='<strong>LOL</strong>';
console.log(x);

//parent and children
const y=document.querySelectorAll('li')[1].parentElement;
console.log(y);

const z=document.querySelectorAll('li')[0].parentElement.parentElement;
console.log(z);

console.log(z.parentElement); // HTML
console.log(z.parentElement.parentElement); // null
// console.log(z.parentElement.parentElement.parentElement); // gives error : Cannot read properties of null (reading 'parentElement')

console.log(z.children);