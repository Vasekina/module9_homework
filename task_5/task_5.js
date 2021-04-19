/*Задание 5
Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — 
выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — 
выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст 
«Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, 
где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. */

const numberOfPage = document.getElementById('page');
const limit = document.getElementById('limit');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const myStorage = window.localStorage;

btn.addEventListener ('click', function () {
  const numberOfPageValue = numberOfPage.value;
  const limitValue = limit.value;
  if ((numberOfPageValue > 10 || numberOfPageValue < 1) && (limitValue > 10 || limitValue < 1)) {
    container.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
  } else if (limitValue > 10 || limitValue < 1) {
    container.innerHTML = 'Лимит вне диапазона от 1 до 10';
  } else if (numberOfPageValue > 10 || numberOfPageValue < 1) {
    container.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
  } else {
getRequest(numberOfPageValue,limitValue);
  } 

});

function getRequest (pageUrl, limitUrl) {
  const url = `https://picsum.photos/v2/list?page=${pageUrl}&limit=${limitUrl}`;
  fetch(url)
  .then ((response) => {
const result = response.json();
return result
  })
  .then((data) => {
    myStorage.setItem('json', data);
    myStorage.setItem('pageNumber', pageUrl);
    myStorage.setItem('limit', limitUrl);
    
    showPicture(data);
  })
}

function showPicture(data) {
  let picture = '';
    data.forEach(element => {
      let imgForm = `
      <img src = "${element.download_url}" width = '100'>`; 
      picture += imgForm;
    });
    container.innerHTML = picture; 
}

const myJson = JSON.parse(localStorage.getItem('json'));
  if (myJson) {
    showPicture(myJson) 
  }



