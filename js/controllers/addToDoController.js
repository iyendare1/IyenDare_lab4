import {addToDo} from '../models/toDoListModel'
import {getStore} from '../models/store'

let dialog
let closeButton
let exitButton
let addButton
let form
let uid

    export function addToDoController(itemUid) {
    uid = itemUid
    //const todo = getStore().find((item) => item.uid === uid)
    dialog = document.querySelector('#addtodo')
     form = document.getElementById('add')
    //const input = form.querySelector('input');
    configUi(todo)
    configureListeners()
    //dialog.showModal()
    }

   const Form = ({input, setInput, todos}) => {
    const onInputChange = (event) => {
      setInput(event.target.value);
    };
  }
    const onFormSubmit = (event) => {
      event.preventDefault();
      setTodos([...todos, {uid}])
    };
   

    const div = document.getElementById('add');

    function addNewItem(e) {
      e.preventDefault()
      const todo = e.currentTarget.todo.value.trim()
      const category = e.currentTarget.category.value.trim()
      const status = e.currentTarget.status.value.trim()
  
      addToDo({
          todo,
          category,
          status,
          uid,
      })
      console.log(temp)
  }
   
    function configUi(item) {
      // dialog.querySelector('#todo').value = item.todo
       //dialog.querySelector('#category').value = item.category
       //dialog.querySelector('#status').value = item.status
    }
    
   function configureListeners() {
  // exitButton.addEventListener('click', onCloseDialog)
    //closeButton.addEventListener('click', onCloseDialog)
      // form.addEventListener('submit', onAddToDoItem)
    }

     function addToDoItem() {
        alert("Add button clicked!");
      }

    document.forms[0].reset();

    function onAddToDoItem(e) {
       e.preventDefault()
       console.log(uid)
    }

    function onCloseDialog(e) {
        dialog.close()
    }
    
