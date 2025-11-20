const URL = "http://localhost:3000/todos";
//METHOD GET
//REST API
/*
GET - Отримання даних
POST - Додавання даних
DELETE - видалення даних
PUT - редагування
*/
async function getTodos() {
  try {
    const response = await fetch(URL);
    const todos = await response.json();
    for (let i = 0; i < todos.length; i++) {
      console.log(todos[i]);
    }
  } catch (err) {
    console.log(err);
  }
}

async function addTodo(todo) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
async function deleteTodo(id) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

const btn = document.getElementById("todoBtn");
btn.addEventListener("click", () => {
  getTodos();
});

const addTodoBtn = document.getElementById("addTodoBtn");
addTodoBtn.addEventListener("click", () => {
  const todo = {
    id: "31",
    title: "my title",
    comments: "нова задача",
    status: "done",
  };
  addTodo(todo);
});

const deleteTodoBtn = document.getElementById("deleteTodo");
deleteTodoBtn.addEventListener("click", () => {
  const id = document.getElementById("id_todo").value;
  deleteTodo(id);
});
