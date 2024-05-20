export default function TodoItem({ subtitle, todos, setTodos }) {
  const changeDone = (item) => {
    const restTodos = todos.filter((todo) => {
      return todo.id !== item.id;
    });
    // setTodos([...restTodos, { ...item, isDone: !item.isDone }]);
  };

  return todos
    .filter((todo) => {
      return subtitle === "Working" ? !todo.isDone : todo.isDone;
    })
    .map((item) => {
      const { id, title, content, isDone } = item;
      return (
        <li key={"item" + id}>
          <div>
            <h4>{title}</h4>
            <p>{content}</p>
            <button>삭제</button>
            <button onClick={changeDone(item)}>
              {isDone === true ? "취소" : "완료"}
            </button>
          </div>
        </li>
      );
    });
}
