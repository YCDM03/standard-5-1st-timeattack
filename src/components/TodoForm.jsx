export default function TodoForm({ todos, setTodos }) {
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const date = new Date();
        const title = formData.get("title");
        const content = formData.get("content");
        setTodos([...todos, { id: date.now(), title, content, isDone: false }]);
      }}
    >
      <h1>투두리스트 타임어택</h1>
      <label htmlFor="">제목</label>
      <input type="text" name="title" />
      <label htmlFor="">내용</label>
      <input type="text" name="content" />
      <button>추가</button>
    </form>
  );
}
