import React from "react";
import { FullListDetailsFragment } from "../graphql/generated";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import TodoItemView from "./TodoItemView";
import AddButton from "./AddButton";
import { SmallMargin } from "../styled/common";
import { addNewItem, clearDoneItems } from "../graphql";
import { useStore } from "../context/store";
import ClearButton from "./ClearButton";

const Container = styled.div`
  width: 20rem;
`;

const Header = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  margin: 0;
`;

const ActionBar = styled.div`
  display: grid;
  grid: auto / auto auto;
`;

interface Props {
  list: FullListDetailsFragment;
}

export default ({ list }: Props) => {
  const store = useStore();

  return (
    <SmallMargin>
      <Card>
        <Container>
          <Header>{list.name}</Header>
          {list.items &&
            list.items.map(item => {
              return (
                <TodoItemView item={item} listId={list.id} key={item.id} />
              );
            })}
          <ActionBar>
            <AddButton
              text="New Item"
              onClick={async () => {
                const name = prompt("What do you need to do?");
                if (name) {
                  await addNewItem({
                    input: {
                      name,
                      listId: list.id,
                      description: ""
                    }
                  });
                  await store.refetch();
                }
              }}
            />
            <ClearButton
              text="Clear Done"
              onClick={async () => {
                await clearDoneItems(list.id);
                await store.refetch();
              }}
            />
          </ActionBar>
        </Container>
      </Card>
    </SmallMargin>
  );
};
