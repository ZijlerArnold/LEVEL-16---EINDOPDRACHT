console.log('Jij bent goed bezig man :-)');
console.log('===== Toggle Menu Color =====');
console.log('');


// ===== Hamburger icon Button =====
document.querySelector('#button').addEventListener('mouseover', (e) => {
    e.preventDefault();
    const colorBox = document.querySelector('#color-box')
   // colorBox.classList.toggle('');   
    if (colorBox.style.display !== 'none') {
        colorBox.style.display = 'none';
    }
    else {
        colorBox.style.display = 'block';
    }
});


const body = document.querySelector('body')
const listItems = document.querySelectorAll('.color');

const arr = [...listItems].forEach(item => {
    const kleur = item.innerText;
    
    console.log(kleur);   
// ======= Colors Bars =========
    item.addEventListener('click', (e) => {// elk item = click functie, 
        e.preventDefault();    
        body.style.background = kleur;
        const choose = document.querySelector('#choose');
        choose.innerHTML = `You have chosen: ${kleur}`;
        console.log(kleur);      
    });   
});






//===== bekijken wat herhaald word en degene die veranderen =====
// colors = listitems
// addaventlistener(click, event
// => functie
// statement = boduy background aanpassen kleur

// deze zijn de gene die veranderen:
// index herhaling list items
// waarde van body kleur

// ===== Color Bars =====
// colors = document.querySelectorAll('.color');

// colors[0].addEventListener('click', (e) => {
//     document.body.style.background = 'red';
// });

// colors[1].addEventListener('click', (e) => {
//     document.body.style.background = 'blue';
// });

// colors[2].addEventListener('click', (e) => {
//     document.body.style.background = 'yellow';
// });

// colors[3].addEventListener('click', (e) => {
//     document.body.style.background = 'pink';
// });

// colors[4].addEventListener('click', (e) => {
//     document.body.style.background = 'green';
// });





    // if (ul.style.display === 'block') {
    //     ul.style.display = 'none';
    // } else {
    //     ul.style.display = 'block';
    // }
    //ul.remove(); //Hier moet een Toggle functie voor komen.


// ===== Color Bars
// const colors = document.querySelectorAll('.color');

// for (let i = 0; i < colors.length; i++) {
//     colors[i].addEventListener('click', function () {
//         console.log(colors[i]);
//     });


// }
