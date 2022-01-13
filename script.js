const colorOne = document.getElementById('color-1');
const colorTwo = document.getElementById('color-2');
const colorThree = document.getElementById('color-3');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {  
    colorOne.style.background = chgColor();
    colorTwo.style.background = chgColor();
    colorThree.style.background = chgColor();
    displayText();
})

const chgColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const displayText = () => {
    colorOne.innerHTML = chgColor();
    colorTwo.innerHTML = chgColor();
    colorThree.innerHTML = chgColor();
}