const URL = "http://localhost:3000/todos";
//METHOD GET
async function getTodos() {
  try {
    const response = await fetch(URL);
    const todos = await response.json();
    for (let i = 0; i < todos.length; i++) {
      console.log(todos[i].title);
    }
  } catch (err) {
    console.log(err);
  }
}

const btn = document.getElementById("todoBtn");
btn.addEventListener("click", () => {
  getTodos();
});
