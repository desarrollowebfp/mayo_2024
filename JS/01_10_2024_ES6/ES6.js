//Literal string, comillas francesa, backticks
const name = "Byron";
const age = 4;
const color = "marrón";
const peso = 25;

const frase =
  "Me llamo " +
  name +
  " y tengo " +
  age +
  " años, tengo el pelo de color " +
  color +
  " y peso " +
  peso +
  " kilos.";

const fraseES6 = `Me llamo ${name} y tengo ${age} años, tengo el pelo de color ${color} y peso ${peso} kilos.`;

const template = `
<div>
  <ul>
    <li>
      <p>${fraseES6}</p>
    </li>
  </ul>
</div>`;

//Spread operator -> Operador esparcimiento -> ...
const country = "Nueva Zelanda";
const spread = [...country];

console.log(spread);

const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [8, 9, 10, 11];

const newNumbers = [...numbers1, 7, ...numbers2];

const batman = {
  name: "Batman",
  realName: "Bruce Wayne",
  city: "Gotham",
};

const newBatman = {
  ...batman,
  age: 50,
  ...numbers1,
};

console.log(newBatman);

//Destructuring

const batmanDes = {
  altername: "Batman",
  city: "Gotham",
  realName: "Bruce Wayne",
  family: {
    status: false,
    city: "Gotham2",
  },
};

/* const altername = batmanDes.altername;
const realName = batmanDes.realName;
const familyStatus = batmanDes.family.status;
 */
const { altername, realName } = batmanDes;
const { status, city } = batmanDes.family;

console.log(city);
