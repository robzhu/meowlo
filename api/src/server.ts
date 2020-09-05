require("dotenv").config();

import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { TodoListResolver } from "./models/TodoListResolver";
import { buildSchema } from "type-graphql";

process.on("SIGINT", () => {
  console.log("Shutting down...");
  process.exit();
});

(async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TodoListResolver],
      validate: false
    })
  });

  const { url } = await server.listen(process.env.PORT || 80);
  console.log(`Server running on ${url}`);
})();
