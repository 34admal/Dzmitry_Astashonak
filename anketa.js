let lastName = prompt("Введите Вашу Фамилию");
let name = prompt("Введите Ваше Имя");
let surname = prompt("Введите Ваше Отчество ");
let age = parseInt( prompt("Введите Ваш Возраст "));
let isMan = confirm( "ваш пол - мужской?");
let ageDay = age*365;
let in5Years =age+5;
let gender = null;
let pens = null;

if(isMan){
    gender ='мужской';
}else gender ='женский';

if((isMan&&age>=63)||(isMan==false&&age>=58)){pens ="да"}
else pens ="нет"

// console.log(pens)
alert(`
    ваше ФИО:${lastName} ${name} ${surname}
    ваш возраст в годах: ${age} 
    ваш возраст в днях: ${ageDay}
через 5 лет вам будет: ${in5Years}
ваш пол: ${gender}
вы на пенсии: ${pens}`)


