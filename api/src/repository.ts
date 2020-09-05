import { TodoList } from "./models/TodoList";
import fs from "fs";
import { NewItemInput } from "./models/NewItemInput";
import { TodoItem } from "./models/TodoItem";

const STATE_FILE = "./data/state.json";
let _state: TodoList[] = null;

async function readFile(filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
}

async function saveChanges() {
  if (_state) {
    const json = JSON.stringify(_state, null, 2);
    return new Promise((resolve, reject) => {
      fs.writeFile(STATE_FILE, json, err => {
        if (err) reject(err);
        else {
          resolve();
        }
      });
    });
  }
}

export async function getAllLists(): Promise<TodoList[]> {
  if (!_state) {
    _state = JSON.parse(await readFile(STATE_FILE));
  }
  return _state;
}

export async function addItem(itemInput: NewItemInput): Promise<TodoItem> {
  const matchingList = (await getAllLists()).find(
    list => list.id === itemInput.listId
  );

  if (!matchingList) throw "Invalid List ID";
  const newItem = new TodoItem(itemInput);
  matchingList.items.push(newItem);
  await saveChanges();
  return newItem;
}

export async function addTodoList(name: string): Promise<TodoList> {
  const allLists = await getAllLists();
  const newList = new TodoList({
    name
  });
  allLists.push(newList);
  await saveChanges();
  return newList;
}

export async function completeItem(
  listId: string,
  itemId: string,
  done: boolean
): Promise<TodoItem> {
  const list = (await getAllLists()).find(l => l.id === listId);
  if (!list) throw "Invalid List ID";

  const item = list.items.find(i => i.id === itemId);
  if (!item) throw "Invalid Item ID";

  item.done = done;
  await saveChanges();
  return item;
}

export async function clearDoneItemsFromList(
  listId: string
): Promise<TodoList> {
  const list = (await getAllLists()).find(l => l.id === listId);
  if (!list) throw "Invalid List ID";

  list.items = list.items.filter(item => !item.done);
  await saveChanges();
  return list;
}
