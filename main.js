let count = 0;

// Verifica se existe um valor armazenado para 'count' no Local Storage
if (localStorage.getItem('count')) {
    count = parseInt(localStorage.getItem('count'));
}

// Atualiza o elemento HTML com o valor de 'count' ao carregar a página
const countElement = document.getElementById('counter');
countElement.textContent = `${count}`;

const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');

/* Clique Normal */

clickButton.addEventListener('click', () => {
    count++;
    countElement.textContent = `${count}`;
    localStorage.setItem('count', count); // Armazena o valor atualizado no Local Storage
});

document.addEventListener("keydown", function (e) {
    if ((e.keyCode === 32) || (e.key === "d") || (e.key === "f")) {
        count++;
        countElement.textContent = `${count}`; 
        localStorage.setItem('count', count); // Armazena o valor atualizado no Local Storage
    }
});

/* Clique de Reset */

resetButton.addEventListener('click', () => {
    count = 0;
    countElement.textContent = `${count}`;
    localStorage.setItem('count', count); // Armazena o valor zerado no Local Storage
});