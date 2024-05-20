import { useLayoutEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  const subtitle = ["Working", "Done"];
  return subtitle.map((subtitle) => {
    return (
      <ul key={subtitle}>
        <h2>{subtitle}</h2>
        <TodoItem subtitle={subtitle} todos={todos} setTodos={setTodos} />
      </ul>
    );
  });
}
