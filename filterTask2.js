const instructor = [

    {name: 'nobin', age:28,position:'seneyour'},
    {name: 'red', age:28,position:'joniyor'},
    {name: 'tom', age:28,position:'seneyour'}

];
const seniyor =instructor.filter(p => p.position == 'seneyour')
console.log(seniyor)
