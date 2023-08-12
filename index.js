let text = document.getElementById('text');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('.equal');
let reset = document.querySelector('.reset');

for(let i = 0; i< buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        text.value += event.target.value;
    })
}
equal.addEventListener('click', () => {
    text.value = eval(text.value);
})

reset.addEventListener('click', () => {
    text.value='';
})