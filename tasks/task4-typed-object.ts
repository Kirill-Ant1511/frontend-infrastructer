/*
Задание 4: Реализуйте typedObject

Цель:
- Создать объект на основе схемы ожидаемых типов
- При присваивании проверять тип и бросать ошибку при несоответствии
*/


type TargetType = {[key: string]: unknown};

function typedObject(schema: {[key: string]: string }) {
    return new Proxy({}, {
        set(target: TargetType, prop: string, value: unknown, receiver: unknown) { // receiver гарантирует правильный this при работе с наследованием
          if(typeof value !== schema[prop]) {
            throw new TypeError(`Expected type ${schema[prop]} for property ${prop}, but got ${typeof value}`);
          }
          // Reflect позволяет коректно обрабатывать операции с объектами, учитывая все нюансы (например, при наследовании)
          return Reflect.set(target, prop, value, receiver);
        }
    })
}


const user = typedObject({
  name: "string",
  age: "number",
});
user.name = "Ivan"; // выполнится
user.age = 20;      // выполнится
// user.age = "20";    // должно выбросить ошибку
user.age = "20"
console.log(user);


