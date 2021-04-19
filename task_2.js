/*Задание 2.
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
который будет преобразовывать JSON в JS-объект и выводить его в консоль.
*/

const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);


let obj = {
  list: []
}

for (let i = 0; i < 2; i++) {
const list = data.list[i];
  
const result = {
  name: list.name,
  age: Number(list.age),
  prof: list.prof
}  

obj.list.push(result);
}
console.log(obj)
