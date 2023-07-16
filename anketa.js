let lastName = null ;
do {
    lastName = prompt("Введите Вашу Фамилию")
}while( lastName=== ''||lastName===null);



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

const pensVozrastMuzh =63;
const pensVozrastZhen =58;
if((isMan==true&&age>=pensVozrastMuzh)||(isMan==false&&age>=pensVozrastZhen)){pens ="да"}
else pens ="нет"

// console.log(pens)
alert(`
    ваше ФИО:${lastName} ${name} ${surname}
    ваш возраст в годах: ${age} 
    ваш возраст в днях: ${ageDay}
через 5 лет вам будет: ${in5Years}
ваш пол: ${gender}
вы на пенсии: ${pens}`)


