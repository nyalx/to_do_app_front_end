$(document).ready(function() {
  $("#add-new-todo-button").click(addTodo);
 
 
function addTodo(){
//   // Assign the todo description and pomodoro estimate to variables
  var todoBlock = $(this).closest("#new-todo-block")
  var description = todoBlock.find("#new-todo-description")
  var pomodoroEstimate = todoBlock.find("#new-pomodoro-estimate")

//   // Append the new todo to the list of todos
  $("ul").append(
      "<li> <input type='checkbox'/> "
      + description.val()
      + " <span class='pomodoro-estimate'>" 
      + pomodoroEstimate.val() + 
      " pomodoros</span> </li>")
//   //Processed example: "<li> <input type='checkbox'/> Do homework <span class='pomodoro-estimate'> 5 pomodoros</span> </li>"

//   // Clear the input fields for new-todo-description and pomdoro-estimate by entering an empty string as the value
  description.val("")
  pomodoroEstimate.val("")
}
 
 $("ul").on("click", "input[type=checkbox]", function(){
    $(this).closest("li").toggleClass("completed-todo")
  })
})