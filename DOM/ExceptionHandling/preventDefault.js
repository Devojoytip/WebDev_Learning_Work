const bt = document.querySelector('input');

bt.addEventListener('click', f1);
bt.addEventListener('dblclick', f2);

function f1(e) {
    console.log('Thanks', e);
    e.preventDefault();
}

function f2(e) {
    console.log('Thanks for double click', e);
    e.preventDefault();
}