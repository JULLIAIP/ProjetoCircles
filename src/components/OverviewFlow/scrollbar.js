import { css } from 'styled-components';
const scrollbar = css`
  &::-webkit-scrollbar-track {
    background: #dddddd;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }

  scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.15);
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
`;

export const scrollbarThin = css`
  &::-webkit-scrollbar-track {
    background: #dddddd;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }

  scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.15);
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
`;

export const scrollbarHover = css`
  &::-webkit-scrollbar-track {
    visibility: hidden;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    visibility: hidden;
    background-color: black;
  }

  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &:hover {
    &::-webkit-scrollbar-thumb {
      visibility: visible;
    }

    &::-webkit-scrollbar-track {
      visibility: visible;
    }
    scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3);
  }
`;

export default scrollbar;
