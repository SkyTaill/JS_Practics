
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;
const data = JSON.parse(jsonString);
const list = data.list;

let result = {
    list: []
}

list.forEach(element => {
    const prof = {
        name: element.name,
        age: element.age,
        prof: element.prof,

    };
    result.list.push(prof);
});

console.log('result', result);