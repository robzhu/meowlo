import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
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
      <Fab variant="extended" aria-label="Add" onClick={onClick}>
        <AddIcon />
        {text}
      </Fab>
    </Container>
  );
};
