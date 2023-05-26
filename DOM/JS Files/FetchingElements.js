console.log(document.documentElement);

console.log(document.getElementById('one'));

const heading1=document.getElementById('one');
console.log(heading1);

heading1.style.color='red';
heading1.style.backgroundColor='cyan';

const headings=document.getElementsByTagName('h1');
console.log(headings);

headings[0].innerText='Heading 1';
headings[1].innerText='Heading 2';

const p= document.getElementsByClassName('para');
console.log(p);
p[0].style.backgroundColor='grey';

const idOne= document.querySelector('#one');
console.log(idOne);
idOne.innerText='Hello World!';

const classPara= document.querySelector('.para');
console.log(classPara);
classPara.style.backgroundColor='pink';

const allParas= document.querySelectorAll('.para');
console.log(allParas);
allParas.style.backgroundColor='red';
