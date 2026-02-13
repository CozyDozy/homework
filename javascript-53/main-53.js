// Задание 1.
// Дан массив пользователей:
const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]
// Добавьте в конец массива двух пользователей:
users.push(
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
)

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
const getUserAverageAge = (users) => {
    let sum = 0
    users.forEach(el => {
        sum += el.age
    })
    return sum / users.length
}
console.log(getUserAverageAge(users))

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
const admins = []
const getAllAdmins = (users) => {
    users.forEach(el => {
        if (el.isAdmin) {
            admins.push(el)
        }
    })
}
getAllAdmins(users)
console.log(admins)

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, 
// то возвращается массив с первым элементом.

const numbers = [6, 26, 33, 77, 95, -2];
const xxx = [6]
function first(arr, n) {
    let newArray = new Array
    if (n == 0) {
        return []
    } else if (n == undefined) {
        return newArray = arr[0]
    } else if (arr.length < n) {
        return console.error(`не может быть больше длинны массива : ${arr.length}`)
    }
    for (let i = 0; i < n; i++) {
        newArray.push(arr[i])
    }
    return newArray
}

console.log(first(numbers, 0))