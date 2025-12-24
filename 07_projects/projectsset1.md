# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/~/github.com/vinayphanse888/javascript-journey)

## Solution code

## project 1

```javascript
// console.log("vinay")
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach( function (button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'brown') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'gold') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }
    });
});


```

