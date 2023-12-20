import { useReducer } from "react";

const initialTasks = {};

// const [tasks, setTasks] = useState(initialTasks);

const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

// reducers 必须是纯粹的。 这一点和 状态更新函数 是相似的，reducers 在是在渲染时运行的！（actions 会排队直到下一次渲染)。
// 这就意味着 reducers 必须纯净，即当输入相同时，输出也是相同的。
// 它们不应该包含异步请求、定时器或者任何副作用（对组件外部有影响的操作）。
// 它们应该以不可变值的方式去更新 对象 和 数组。
function tasksReducer(state, action) {
  // 给 React 返回更新后的状态
  // dosome;
  return { ...state, ...action };
}

// 每个 action 都描述了一个单一的用户交互，即使它会引发数据的多个变化。
// 举个例子，如果用户在一个由 reducer 管理的表单（包含五个表单项）中点击了 重置按钮，那么 dispatch 一个 reset_form 的 action 比 dispatch 五个单独的 set_field 的 action 更加合理。
// 如果你在一个 reducer 中打印了所有的 action 日志，那么这个日志应该是很清晰的，它能让你以某种步骤复现已发生的交互或响应。
// 这对代码调试很有帮助！
function doSomeAction(action) {
  dispatch(action);
}

// Reducers 应该是纯净的，所以它们不应该去修改 state。而 Immer 为你提供了一种特殊的 draft 对象，你可以通过它安全的修改 state。
// useImmerReducer

// Reference
// react reducer
// https://zh-hans.react.dev/learn/extracting-state-logic-into-a-reducer

// 1
// dispatch({type:'changed_selection', contactId: contact.id})
// dispatch({type:'edited_message', message: e.target.value })

// 2
// alert(message);
// dispatch({
//   type: "edited_message",
//   message: "",
// });

// 结果虽然是一样的。但请记住，action 的类型应该准确描述 “用户做了什么”，而不是 “你希望状态如何改变”。这使得以后添加更多特性变的容易。

// !!!
// 不管是哪一种解决方案，最重要的是你 不要 把 alert 放置在 reducer 中。reducer 必须是一个纯函数——它应该只计算下一个状态。而不应该 “做” 其它事情，包括向用户显示消息。这应该在事件处理程序中处理。（为了便于捕获这样的错误，React 会在严格模式下多次调用你的 reducer。这就是为什么当你在 reducer 中加入一个 alert，它会触发两次的原因。）

// 3
// message={message[contact.id]}

// message: ['你好','',''],

// message = [...state.message]
// message[action.contactId] = action.message
// message[action.contactId] = ''

// contactId: contact.id,