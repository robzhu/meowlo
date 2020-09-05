import React, { useEffect } from "react";
import styled from "styled-components";
import TodoListView from "./components/TodoListView";
import AddButton from "./components/AddButton";
import { useStoreFromProvider, StoreContext } from "./context/store";
import { addNewList } from "./graphql";

const Header = styled.header`
  background-color: #dadce0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
`;

const ListsGrid = styled.div`
  display: flex;
  flex-direction: row;
`;

export default () => {
  const store = useStoreFromProvider({
    lists: []
  });

  // to make the effect run only once, pass in empty array as second argument
  useEffect(() => {
    (async () => {
      await store.refetch();
    })();
  }, []);

  return (
    <StoreContext.Provider value={store}>
      <Header>
        <h1>Your Todo Lists:</h1>
        <AddButton
          text="New List"
          onClick={async () => {
            const name = prompt("New List Name:");
            if (name) {
              await addNewList(name);
              await store.refetch();
            }
          }}
        />
        <ListsGrid>
          {store.lists.map(list => {
            return <TodoListView list={list} key={list.id} />;
          })}
        </ListsGrid>
      </Header>
    </StoreContext.Provider>
  );
};
