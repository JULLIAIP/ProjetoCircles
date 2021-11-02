import styled from "styled-components";

export const WrapperFlowSection = styled.div`
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 1;

  .react-flow__edge-path {
    position: absolute;
  }
  .avatar-icon {
    margin-top: 10px;
    font-size: 1.5rem;
  }

  .default-item {
    color: #231f20;
    display: flex;
    align-items: center;
    border-radius: 50%;
    width: 80%;
    height: 100%;
    .more-infos {
      position: absolute;
      margin-left: 80px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        border: none;
        cursor: pointer;
        &:hover {
          transform: scale(1.08);
        }
        &:last-child {
          margin-left: 15px;
        }
      }
    }

    .user-texts {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      text-transform: capitalize;
      max-width: 80%;

      .user-pessoa_descricaolonga {
        font-weight: 700;
        font-size: 8px;
      }
      .user-function {
        margin-top: 5px;
        font-weight: 700;
        font-size: 7px;
      }
      .user-area {
        margin-top: 3px;
        font-size: 6px;
      }
    }
  }

  .lvl-1 {
    .more-infos {
      button {
        background-color: #2e5f91;
      }
    }
    .user-texts {
      .user-function {
        color: #2e5f91;
      }
    }
  }
  .lvl-2 {
    .more-infos {
      button {
        background-color: #468ebf;
      }
    }
    .user-texts {
      .user-function {
        color: #468ebf;
      }
    }
  }
  .lvl-3 {
    .more-infos {
      button {
        background-color: #61437b;
      }
    }
    .user-texts {
      .user-function {
        color: #61437b;
      }
    }
  }
  .lvl-4 {
    .more-infos {
      button {
        background-color: #8f4b29;
      }
    }
    .user-texts {
      .user-function {
        color: #8f4b29;
      }
    }
  }
  .lvl-5 {
    .more-infos {
      button {
        background-color: #69181b;
      }
    }
    .user-texts {
      .user-function {
        color: #69181b;
      }
    }
  }
  .lvl-6 {
    svg {
      width: 13px;
      height: 13px;
    }
    .more-infos {
      button {
        background-color: #0c6c7d;
      }
    }
    .user-texts {
      .user-function {
        color: #0c6c7d;
        font-size: 5px;
      }
      .user-pessoa_descricaolonga {
        font-size: 7px;
      }
     .user-area{
      font-size: 5px;
     }
    }
  }
  .lvl-7 {
    width: 90%;
    padding-left: 10%;

    .avatar-icon {
      position: absolute;
      top: -20px;
      left: 0px;
      background-color: #ffffff;
      border-radius: 80%;
      width: 30px;
      height: 30px;
    }

    button {
      border: none;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      left: 75%;
      top: -10px;
      svg {
        color: #fff;
      }
    }
    .user-texts {
      display: grid;
      position: relative;

      .user-function {
        color: #ffffff;
      }
    }
  }
`;
