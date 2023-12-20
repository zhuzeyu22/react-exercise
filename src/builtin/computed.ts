// 计算属性
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

// export const initialState = {
//   selectedId: 0,
//   messages: {
//     0: "Hello, Taylor", // contactId = 0 的草稿
//     1: "Hello, Alice", // contactId = 1 的草稿
//   },
// };

// {
//     ...state.messages,
//     [id]: message
// }

// // 计算属性名
// let i = 0;
// const a = {
//   [`foo${++i}`]: i,
//   [`foo${++i}`]: i,
//   [`foo${++i}`]: i,
// };

// console.log(a.foo1); // 1
// console.log(a.foo2); // 2
// console.log(a.foo3); // 3

// const items = ["A", "B", "C"];
// const obj = {
//   [items]: "Hello",
// };
// console.log(obj); // A,B,C: "Hello"
// console.log(obj["A,B,C"]); // "Hello"

// const param = "size";
// const config = {
//   [param]: 12,
//   [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
// };

// console.log(config); // {size: 12, mobileSize: 4}
