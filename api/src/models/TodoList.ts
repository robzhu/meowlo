import { ObjectType, Field, ID } from "type-graphql";
import { TodoItem } from "./TodoItem";
import shortid from "shortid";

@ObjectType()
export class TodoList {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => [TodoItem])
  items: TodoItem[] = [];

  constructor(init: Partial<TodoList>) {
    Object.assign(this, init);
    this.id = shortid.generate();
  }
}
