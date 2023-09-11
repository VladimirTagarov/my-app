import { styled } from "styled-components";

export const PopupGenre = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #313131;
  position: absolute;
  z-index: 1;
  margin-top: 50px;
  width: 248px;
  height: 305px;
  gap: 28px;
  overflow-y: scroll;
`;

export const PopupGenreText = styled.ul`
  display: flex;
  flex-direction: column;
`;
