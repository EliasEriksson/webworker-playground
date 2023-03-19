import {fibonacci} from "../utils/fibbonacci";

/*self.importScripts("../utils/fibbonacci.ts")*/
// function fibonacci(number: number): number {
//   if (number <= 1) return 1;
//   return fibonacci(number - 1) + fibonacci(number - 2);
// }
self.addEventListener("message", (event: MessageEvent<number>) => {
  self.postMessage(fibonacci(event.data))
})

export {}