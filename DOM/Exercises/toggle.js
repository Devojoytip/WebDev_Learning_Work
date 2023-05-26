const s = document.querySelector('.center');

const arr = ['#03a9f4', 'white'];
var i = 0;

s.addEventListener('click', function () {
    (i == 1) ? i = 0 : i++;
    document.body.style.background=arr[i];
})