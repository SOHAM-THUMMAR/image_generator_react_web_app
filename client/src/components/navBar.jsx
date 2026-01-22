import React from "react";
import styled from "styled-components";
import Button from "./button";
import { AddRounded } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 55px;
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
@`;

export const NavBar = () => {
  return (
    <Container>
      imagin
      <Button
        text="create a image"
        leftIcon={
          <AddRounded
            style={{
              fontSize: "18px",
            }}
          />
        }
      />
    </Container>
  );
};
