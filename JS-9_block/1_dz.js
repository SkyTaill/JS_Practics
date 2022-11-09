
const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let xmlDOM = parser.parseFromString(xmlString, "text/xml");

let student = xmlDOM.querySelectorAll("student");

let res = {
  list: []
}

student.forEach(elem => {
  let name = elem.querySelector("name");
  let first = name.querySelector("first");
  let second = name.querySelector("second");
  let age = elem.querySelector("age");
  let prof = elem.querySelector("prof");
  let lang = name.getAttribute('lang');

  let nameRes = {
    first: first.textContent,
    second: second.textContent,
    lang: lang,
  };
  let result = {
    name: nameRes,
    age: Number(age.textContent),

    prof: prof.textContent,
  };
  res.list.push(result);
  console.log("result", result);
});

console.log("result", res);


