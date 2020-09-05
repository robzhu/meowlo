import React from "react";
import Fab from "@material-ui/core/Fab";
import { Delete } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  margin: 0.5rem;
  text-align: center;
`;

interface Props {
  text: string;
  onClick: () => void;
}

export default ({ text, onClick }: Props) => {
  return (
    <Container>
      <Fab variant="extended" aria-label="Delete" onClick={onClick}>
        <Delete />
        {text}
      </Fab>
    </Container>
  );
};
