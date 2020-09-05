import { Query, Mutation, Arg } from "type-graphql";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { NewItemInput } from "./NewItemInput";
import {
  getAllLists,
  addTodoList,
  clearDoneItemsFromList,
  addItem as addTodoItem,
  completeItem as completeTodoItem
} from "../repository";

export class TodoListResolver {
  @Query(returns => [TodoList])
  public async allLists(): Promise<TodoList[]> {
    return await getAllLists();
  }

  @Mutation(returns => TodoList)
  public async addList(@Arg("name") name: string) {
    return await addTodoList(name);
  }

  @Mutation(returns => TodoItem)
  public async addItem(@Arg("input") input: NewItemInput) {
    return await addTodoItem(input);
  }

  @Mutation(returns => TodoItem)
  public async setItemDone(
    @Arg("listId") listId: string,
    @Arg("itemId") itemId: string,
    @Arg("done") done: boolean
  ) {
    return await completeTodoItem(listId, itemId, done);
  }

  @Mutation(returns => TodoList)
  public async clearDoneItems(@Arg("listId") listId: string) {
    return await clearDoneItemsFromList(listId);
  }
}
