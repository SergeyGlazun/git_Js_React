'use strict'

new RegExp('pattern','flags');

const ans = promt('Введите ваше имя');

const reg = /n/i;

//i - ищим в независимости от регистра
//g - несколько вхождений
//m - многострочный режим

console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Password');
console.log(pass.replace(/\./g,"*"));///заменяет одно на другое

console.log('12-34-56'.replace(/-/g,':'));

console.log(reg.test(ans));///проверяте есть ли в это й строе определенные символы возрощает true/false
