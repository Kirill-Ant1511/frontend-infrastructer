/*
Задание 1: Реализуйте свой Promise.all

Требования:
- Принимает список промисов
- Резолвится массивом результатов в том же порядке
- Немедленно реджектится при первой ошибке
*/

function promiseAll<T>(promises: T[]): Promise<T[]> {
  if(!Array.isArray(promises)) {
    throw new TypeError('Expected an array');
  }
  return new Promise((resolve, reject) => {
    // массив для хранения результатов
    const results: T[] = [];
    // счетчик для отслеживания количества выполненных промисов в получения результатов в правильном порядке
    let index: number = 0;
    // флаг для отслеживания, был ли уже реджект
    let isRejected: boolean = false;
    if(promises.every(p => p instanceof Promise)) {
      if(promises.length === 0) {
        resolve(results);
        return;
      }
      promises.forEach((element, i) => {
        element.then(value => {
          if (isRejected) return;
          results[i] = value;
          index++;
          if (index === promises.length) {
            resolve(results);
          }
        }).catch(error => {
          if (isRejected) return;
          isRejected = true;
          reject(error);
        });
      });
      
    } else {
      resolve(promises)
    }
  });
}


// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve('2');
// const p3 = Promise.resolve(3);

// promiseAll([p1, p2, p3]).then(result => console.log(result)).catch(error => console.error(error)); // [1, 2, 3]

const p1 = new Promise(res => setTimeout(() => res('first'), 100));
const p2 = new Promise(res => setTimeout(() => res('second'), 10));
promiseAll([p1, p2]).then(console.log);
promiseAll([1, 2]).then(console.log).catch(console.error);