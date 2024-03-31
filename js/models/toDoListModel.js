import {ref, set, get, push, child, remove, update} from 'firebase/database' 
import {db} from '../lib/firebase/config/firebaseInit'
import {createstore, removeFromStore, updateStore} from './store' 

let observers = []
export function subscribe(fn) {
    observers.push(fn)
    console.log(observers)     
}

export function notify(data) {
   observers.forEach((observer) =>observer(data))
}

export async function getToDoData() {
    const dbRef = ref(db, 'todos')
    const response = await get(dbRef)
    let payload = await response.val()
    console.log(payload)
    payload = Object.entries(payload)
    let toDoItems = payload.map((item) => { 
    return {...item[1], uid: item[0]}
    })
  notify(toDoItems)
}

export function deleteToDo(uid) {
    const dbRef = ref(db, 'todos/${uid}')
    remove(dbRef)
    const store = removeFromStore(uid)
    notify(store)
}

export function updateToDo(updateToDo) {
    let payload = updateToDo
    const dbRef = ref(db, 'todos/${payload.uid}')
    update(dbRef, payload)
    const store = updateStore(payload)
    notify(store)
}

export function addToDo(addToDo) {
    let payload = addToDo
    const dbRef = ref(db, 'todos/${payload.uid}')
    add(dbRef, payload)
    const store = addToStore(payload)
    notify(store)
}


