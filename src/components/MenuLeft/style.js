import styled, { css } from "styled-components";

export const WrapperMenuLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 20%;

  font-family: Arial, Helvetica, sans-serif;

  img {
    width: 75%;
  }
`;
export const Legendas = styled.div`
  display: flex;
  align-content: center;
  justify-content: start;

  padding-left: 5%;
  p {
    padding-left: 10px;
    display: flex;
    align-items: center;
    margin: 7px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  > p:before {
    position: relative;
    content: "";
    display: flex;
    margin-right: 10px;
    width: 8px;
    height: 8px;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    border: 5px solid #32a7ea;
    background-color: #fff;

    ${(props) =>
      props.nivel === 5 &&
      css`
        border: none;
        background-color: #62e8e9;
        width: 18px;
        height: 18px;
      `}
    ${(props) =>
      props.nivel === 3 &&
      css`
        border: 5px solid #9373a7;
      `}
      ${(props) =>
      props.nivel === 4 &&
      css`
        border: 5px solid #ce7841;
      `}
    ${(props) =>
      props.nivel === "" &&
      css`
        border: 5px solid #c25558;
      `}
      ${(props) =>
      props.nivel === 2 &&
      css`
        border: 5px solid #1e279a;
      `}
      ${(props) =>
      props.nivel === 6 &&
      css`
        border: 5px solid #adbdbd;
      `}
  }
`;
export const InputBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #268898;
  width: 80%;
  box-shadow: 1px 2px 5px 2px #adbdbd;
  border-radius: 20px;
  padding: 2%;
  margin: 10%;

  input {
    border: none;
    background-color: transparent;
    outline:0;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: -15px;
  }
`;
export const SeeAll = styled.button`
  border: none;
  color: #fff;
  width: 150px;
  height: 30px;
  border-radius: 20px;
  background-color: #ee7c32;
  cursor: pointer;
  box-shadow: 1px 2px 5px 2px #adbdbd;
  margin-top: 10%;

  &:hover {
    transform: scale(1.01);
  }
  svg {
    display: inline;
    font-size: 15px;
    margin-left: 10px;
  }
`;
