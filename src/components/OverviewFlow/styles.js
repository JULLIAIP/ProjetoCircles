import styled from "styled-components";
import scrollbar from "./scrollbar";

const handleColorType = (color) => {
  switch (color) {
    case 2:
      return "#2e5f91";
    case 3:
      return " #9172a6";
    case 4:
      return "#db8a4f";
    case 5:
      return "#62e8e9";
    case 6:
      return " #e1e1e1";
    default:
      return " #6badf0";
  }
};
export const WrapperPopover = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 550px;
  height: 550px;
  padding: 5%;
  margin-left: 150px;
  z-index: 20;
  font-family: Arial, Helvetica, sans-serif;
  color: #696969;
  background-color: #ffffff;
  box-shadow: 1px 5px 5px 1px gray;
  .react-flow__node-default.selected {
    border: none;
    box-shadow: none;
  }
`;
export const WrapperMission = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 800px;
  height: 800px;
  padding: 5%;
  margin-left: 150px;
  z-index: 20;
  font-family: Arial, Helvetica, sans-serif;
  color: #696969;
  background-color: #ffffff;
  box-shadow: 1px 5px 5px 1px gray;
  .react-flow__node-default.selected {
    border: none;
    box-shadow: none;
  }
`;
export const ImgContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 200px;
  border: 20px solid;
  border-color: ${(props) => handleColorType(props.color)};
  width: 150px;
  height: 150px;
  background-color: #696969;
  border-radius: 50%;
  z-index: 0;
  svg {
    font-size: 100px;
    margin-top: 20px;
  }

  img {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 120px;
    z-index: 0;
    color: #ffff;
    border-radius: 50%;
    font-size: 20px;
    align-items: center;
  }
`;
export const DataContainer = styled.div`
  position: relative;
  text-align: start;
  padding-left: 100px;
  z-index: 3;
  line-height: 0;
  max-width: 70%;

  p {
    ${scrollbar};
    line-height: 1;
    text-align: justify;
    overflow: auto;
    max-height: 100px;
    margin-top: 20px;
  }
  h1 {
    font-size: 16px;
  }
  h2 {
    color: ${(props) => handleColorType(props.color)};
    font-size: 14px;
  }
  div,
  label {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  button {
    border: none;
    width: 25px;
    height: 25px;
    background-color: #696969;
    border-radius: 50%;
    cursor: pointer;

    svg {
      color: #ffffff;
    }
  }
  .button {
    position: relative;
    left: 60px;
    top: 20px;
    color: #ffffff;
    background-color: ${(props) => handleColorType(props.color)};
    border: none;
    width: 50%;
    border-radius: 20px;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
  }
  label {
    margin-bottom: 2px;
    svg {
      min-width: 20px;
      min-height: 20px;
      margin-right: 5px;
      color: #696969;
      cursor: pointer;
    }
  }
`;
export const ButtonContainer = styled.div`
  position: relative;
  top: -170px;
  z-index: 4;
  svg {
    color: #ffffff;
    font-size: 24px;
  }
  .more-top {
    position: relative;
    left: -50px;
  }
  .misison-button {
    position: absolute;
    left: 850px;
    top: -450px;
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${(props) => handleColorType(props.color)};
    cursor: pointer;
  }
`;
export const ButtonActividades = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 300px;
  top: -380px;
  left: 630px;
  button {
    opacity: 80%;
    left: 60px;
    top: 20px;
    color: #ffffff;
    background-color: ${(props) => handleColorType(props.color)};
    border: none;
    width: 50%;
    border-radius: 20px;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
