const user = {
   name: 'Sasha',
   age: 25,
   cat: true,
   credit: false,
   sayHello(name) {
      console.log(`Hello ${name}`)
   }
}
user.sayHello(user.name)

let users = [
   {
      name: 'Alex',
      age: 20,
      isAdmin: false,
   },
   {
      name: 'John',
      age: 26,
      isAdmin: true,
   },
   {
      name: 'Sasha',
      age: 25,
      isAdmin: false,
   },
   {
      name: 'Eve',
      age: 25,
      isAdmin: false,
   }
]
let numberOfOrdinaryUsers = 0

for (let i = 0; i < users.length; i++) {
   if (users[i].isAdmin == false) {
      numberOfOrdinaryUsers = numberOfOrdinaryUsers + 1
   }
}

console.log(`Количеством простых пользователей: ${numberOfOrdinaryUsers}`)
