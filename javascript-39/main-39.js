// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
    name: "Александр",
    age: 26,
    country: "Россия"
}

console.log(person)
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const emptiness = {}

const isEmpty = (obj) => {
    for (let key in obj) {
        if (obj[key]) {
            return false
        }
    }
    return true
}
console.log(isEmpty(person))
console.log(isEmpty(emptiness))

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
    title: "Задача 3",
    description: "Создайте объект task",
    isCompleted:false
}

const task2 = {
    title: "Задача 4"
}

function cloneAndModify(object, modifications) {
   const clone = {...object, ...modifications}
   return clone
}
for (let key in cloneAndModify(task,task2)) {
    console.log(`${key}: ${cloneAndModify(task,task2)[key]}`)
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:

function callAllMethods (obj) {
    for(let key in obj) {
        if(typeof obj[key] == 'function') {
            obj[key]()
        }
    }
}
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};
callAllMethods(myObject);
