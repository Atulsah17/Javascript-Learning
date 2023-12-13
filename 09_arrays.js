const marvel_heros= ["ironwomen", "thor",  "fury"]
const dc_heros= ["flash","superman", "spiderman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// const allHeros = [...marvel_heros,...dc_heros]
// console.log(allHeros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("Atul"))
console.log(Array.from("Atul"))
