/*
Задание 2: Реализуйте delay

Требования:
- delay(ms) возвращает промис
- Промис резолвится через ms миллисекунд
*/

function delay(ms: number): Promise<void> {
  if(typeof ms !== 'number') {
    throw new TypeError(`Expected a number, but got ${typeof ms}`);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

delay("asdf").then(() => console.log("Готово через 500мс"));