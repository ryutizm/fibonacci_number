// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// フィボナッチ数列ひな形
// let a: number = 0, b: number = 1;

// while (a < 100) {
//   console.log(a);
//   [a, b] = [b, a + b]
// };

// どうにか関数にしたい→できた！！！！！！！！！！！！！！！！
let fibonatti = () => {
  let a:number = 0, b:number = 1;
  let result = [];
  while(a < 100) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  console.log(result);
}

fibonatti();