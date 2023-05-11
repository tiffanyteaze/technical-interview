// 1. Write code to get array of names from given array of users

const users = [ 
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
    }
];

let userNames = users.map(userObject => {
    return userObject.name;
});

console.log(userNames);