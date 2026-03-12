/*
Задание 3: Реализуйте memoize для функций

Ограничения:
- Аргументы функции — только строки или числа (для упрощения)
- Кэшируйте результат по аргументам
*/

function memoize<T extends (string | number), R extends (string | number)>(fn: (...args: T[]) => R) {
  if(typeof fn !== 'function') {
    throw new TypeError(`Expected a function, but got ${typeof fn}`);
  }
  const cache: Map<string, R> = new Map();
  return function(...args: T[]): R {
    const key = args.join(',');
    if (cache.has(key)) {
      console.log('Из кэша');
      return cache.get(key);
    } 
    console.log('Вычисляем результат');
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  }
}

const slowAdd = (a: number, b: number) => {
  return a + b;
};

const memoAdd = memoize<number, number>(slowAdd);
memoAdd(1, 2); // возвращает 3
memoAdd(1, 2); // из кэша, возвращает 3

console.log(memoAdd(1, 2));

const obj = {
  value: 10,
  add(a: number) {
    return this.value + a;
  },
  memoAdd: null as unknown as Function
};

obj.memoAdd = memoize<number, number>(obj.add);
console.log(obj.memoAdd(5));
console.log(obj.memoAdd(5));
