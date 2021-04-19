/*Задание 4
Напишите код приложения, интерфейс которого представляет собой input и кнопку.
 В input можно ввести любое число. При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из 
чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по 
URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.*/

const btn = document.querySelector('button');
const width = document.querySelector('.width');
const height = document.querySelector('.height');
const container = document.querySelector('.container');

btn.onclick = function () {
    const widthValue = width.value;
    const heightValue = height.value;
    if (widthValue > 300 || widthValue < 100 || heightValue > 300 || heightValue < 100) {
        container.innerHTML = 'одно из чисел вне диапазона от 100 до 300';   
    }   else {
        const url = `https://picsum.photos/${widthValue}/${heightValue}`;
        fetch(url).
        then((response) => {
            const picture = `
            <div>
            <img src = "${url}">
            </div>`;
            container.innerHTML = picture;
        })
    }
}
