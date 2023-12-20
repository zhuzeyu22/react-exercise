// Function Overloads

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);

function fn(x: string): void;
function fn(): void;
function fn() {
  // ...
}
// Expected to be able to call with zero arguments
fn();
// 同样，用于编写函数体的签名不能从外部“看到”。
// 实现的签名从外部不可见。编写重载函数时，应始终在函数实现上方具有两个或多个签名。

// 这个功能很好;我们可以用字符串或数组调用它。但是，我们不能使用可能是字符串或数组的值来调用它，因为 TypeScript 只能将函数调用解析为单个重载：

// 如果可能，始终首选具有联合类型的参数，而不是重载