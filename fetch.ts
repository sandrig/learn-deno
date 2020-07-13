// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const data = await response.json();

// console.log(data);

window.addEventListener("load", () => {
  console.log("load");
});

window.addEventListener("unload", () => {
  console.log("unload");
});

// deno run --allow-net fetch.ts https://jsonplaceholder.typicode.com/todos/1
const url = Deno.args[0];
console.log("Making request to url:", url);
const response = await fetch(url);
const data = await response.json();

console.log(data);

await Deno.writeFile(
  "data.json",
  new TextEncoder().encode(JSON.stringify(data)),
);
