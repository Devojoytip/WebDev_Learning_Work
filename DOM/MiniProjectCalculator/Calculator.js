let screen=document.querySelector('#screen');
buttons=document.querySelectorAll('.bt');

let screenValue='';
for(item of buttons)
{
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log('Text on button is ',buttonText);

        if (buttonText=='X') {
            buttonText='*';
            screenValue+=buttonText;
        }

        else if (buttonText=='C') {
            screenValue="";
        }

        else if (buttonText=='=') {
            screenValue="";
        }
    })
}