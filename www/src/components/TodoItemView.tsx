import React from "react";
import { FullItemDetailsFragment } from "../graphql/generated";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { Checkbox } from "@material-ui/core";
import { setItemDone } from "../graphql";
import { useStore } from "../context/store";

const Container = styled.div`
  margin: 0.5rem;
`;

const Inner = styled.div`
  padding: 0.5rem;
  display: grid;
  grid: auto / 40px auto;
  align-items: center;
`;

const Strikethrough = styled.p`
  text-decoration: line-through;
  margin: 0;
`;

interface Props {
  item: FullItemDetailsFragment;
  listId: string;
}

export default ({ item, listId }: Props) => {
  const store = useStore();
  return (
    <Container>
      <Card>
        <Inner>
          <Checkbox
            checked={item.done}
            onChange={async (_, checked) => {
              await setItemDone(listId, item.id, checked);
              await store.refetch();
            }}
          />
          <div>
            {item.done ? <Strikethrough>{item.name}</Strikethrough> : item.name}
          </div>
        </Inner>
      </Card>
    </Container>
  );
};
