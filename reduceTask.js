const pepol =[
    {name:'rina',age:25},
    {name:'tina',age:20},
    {name:'fina',age:21},
    {name:'mina',age:23}

]
const friends = pepol.reduce((p,c) => p + c.age, 0);
console.log(friends);