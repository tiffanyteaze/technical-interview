// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending

const users = [ 
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30,
    }
];

const names = users
    .sort((user1, user2) => user1.age < user2.age ? 1 : -1)
    .filter(user => user.isActive)
    .map(user => user.name);

console.log("names", names);

// let userAges = users.map(userObject => userObject.age)
// let sortedNames = userAges.sort();
// console.log(sortedNames);

// users.sort((firstUser, secondUser) => firstUser.age < secondUser.age ? 1 : -1);

// let userNames = users.reduce(userObject => {
//     if (userObject.isActive) {
//         return userObject.name
//     }
//     else {return null};
// });

// let names = [];
// for (let i = 0; i < users.length; i++) {
//     if (users[i].isActive) {
//         names.push(users[i].name);
//     }
// }