import { InputType, Field } from "type-graphql";
import { TodoItem } from "./TodoItem";

@InputType({ description: "Input type for new TODO item" })
export class NewItemInput implements Partial<TodoItem> {
  @Field()
  listId: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
