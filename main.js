let count = 0;

const countElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');

/* Clique Normal */

clickButton.addEventListener('click', () => {
    count++;
    countElement.textContent = `${count}`;
});

document.addEventListener("keydown", function (e) {
    if ((e.keyCode === 32) ||  (e.key === "d") ||  (e.key === "f")) {
        count++;
        countElement.textContent = `${count}`; 
    }
    
});

/* Clique de Reset */

resetButton.addEventListener('click', () => {
    count = 0;
    countElement.textContent = `${count}`;
});