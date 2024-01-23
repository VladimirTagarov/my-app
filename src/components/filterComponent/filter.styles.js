import styled from "styled-components";

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const Popup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
`;

export const PopupAuthor = styled.ul`
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
  padding-left: 12px;
  padding-top: 12px;
`;

export const PopupAuthorText = styled.li`
  display: flex;
  flex-direction: column;
`;
