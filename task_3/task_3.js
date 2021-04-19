/*Задание 3
Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по 
URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.*/

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', function () {
  
  let value = document.querySelector('input').value;
  
  if (value > 10 || value < 1) {
  console.log('число вне диапазона от 1 до 10'); 
  } 
  else 
  {
 let xhr = new XMLHttpRequest();
  
  xhr.open('GET', `https://picsum.photos/v2/list?limit=${value}`);
  
  xhr.onload = function () {
    let items = JSON.parse(xhr.response);
    let picture = ''; 
    items.forEach(item => {
     const imgForm = `
<div>
<img src = '${item.download_url}' style='padding-right: 20px; width: 400px; height: 400px'>
</div>
`; 
     picture += imgForm;  
     });
      
     container.innerHTML = picture;
  };
  
  xhr.onerror = function () {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  } 
  
  xhr.send();   

  }})
  