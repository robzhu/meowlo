import { ObjectType, Field, ID } from "type-graphql";
import shortid from "shortid";

@ObjectType()
export class TodoItem {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  priority: number;

  @Field()
  done: boolean = false;

  constructor(init: Partial<TodoItem>) {
    Object.assign(this, init);
    this.id = shortid.generate();
  }
}
