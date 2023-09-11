import "./yearFilter.css";
import { useState } from "react";
import * as S from "./yearFilter.style";

function YearFilter() {
  const year = [1992, 1993, 1994];
  return (
    <S.PopupYear>
      {year.map((element, i) => (
        <S.PopupYearText key={i}>{element}</S.PopupYearText>
      ))}
    </S.PopupYear>
  );
}

export default YearFilter;
