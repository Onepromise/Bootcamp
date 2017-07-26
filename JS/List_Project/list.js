var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?")



while (input !=="quit") {
  //handle input
  if (input === "list") {
    listTodos()
  } else if (input === "new") {
    newTodos()
  } else if (input === "delete") {
    deleteTodos()
  }
  var input = prompt("What would you like to do?")
}
console.log( "OK, You quit the app!")

//Functions!
function listTodos() {
  console.log("**********")
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("**********")
}
function newTodos(){
  //ask for new todo
  var newtodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newtodo);
  console.log("Added Todo");
}
function deleteTodos() {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //delete that todo
  //splice()
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
