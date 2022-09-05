alert("Задача про площу прямокутника");
{
  let number1 = parseInt(prompt("Введіть першу сторону"));
  let number2 = parseInt(prompt("Введіть другу сторону"));
  let product = number1 * number2;
  let product2 = number1 * 2 + number2 * 2;
  alert(`Площа прямокутника= ${product}см квадратних`);
  alert(`Периметр прямокутника= ${product2}см`);
}
alert("задача про вік учня");
{
  let number1 = parseInt(prompt("Введіть ваш рік народження"));
  const THIS_YEAR = 2022;
  let product = THIS_YEAR - number1;
  alert(`Вам ${product} років`);
}
alert("задача про книгу ");
{
  let H = parseInt(prompt("Одна сторінка прочитуеться за ... сек"));
  let S = parseInt(prompt("В книжці сторінок"));
  const SEC_IN_HOUR = 3600;
  let product = H * S;
  let time = product / SEC_IN_HOUR;
  alert(`Книга буде прчитана за ${time} годин`);
}
alert("задача про цукерки та дітей");
{
  let W = parseInt(prompt("Склільки є кг цукерок"));
  let M = parseInt(prompt("Скільки є дітей"));
  let product = W / M;
  alert(`Кожній Дитині доствнеться ${product} кг цукерок`);
}
alert("задача про порося");
{
  let P = parseInt(prompt("введіть скильки грам набирає порося щодня"));
  let S = parseInt(prompt("ВВедіть кінцеву вагу свині у кг"));
  const WEIGHT = 1000;
  let D = S / P;
  let days = D * WEIGHT;
  alert(
    `Якщо спорося буде набирати  ${P} г щодня ,то вона вирасте до свині вашою ${S} кг за ${days} днів`
  );
}
