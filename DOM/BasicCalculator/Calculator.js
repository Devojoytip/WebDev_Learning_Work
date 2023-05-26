let screen=document.querySelector('#screen');
let smallScreen=document.querySelector('#small-screen');
buttons=document.querySelectorAll('button');

let screenValue='';
for(item of buttons)
{
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log('Text on button is ',buttonText);

        if (buttonText=='x') {
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }

        else if (buttonText=='AC') {
            screenValue="";
            screen.value=screenValue;
            smallScreen.value=screenValue;
        }

        else if (buttonText=='=') {
            smallScreen.value=`${screenValue} = `;
            screen.value=`${eval(screenValue)}`;
        }

        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}