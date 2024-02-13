import React, { useState } from "react";
import * as S from "./AuthorFilter.style";

function AuthorFilter({ tracks, setTracks }) {
  // const [arrayOfAuthors, setArrayOfAuthors] = useState([]);
  const [countOfToggles, setCountOfToggles] = useState(0);

  let arrayOfAuthors = [];
  let sortArrayOfAuthors = [];
  arrayOfAuthors = tracks.map((track) => track.author);
  console.log(arrayOfAuthors);
  sortArrayOfAuthors = arrayOfAuthors.filter(
    (item, index) => arrayOfAuthors.indexOf(item) === index && item !== "-"
  );
  console.log(sortArrayOfAuthors);
  const toggleAuthors = (authorsId) => {
    console.log(authorsId);
    // setCountOfToggles(countOfToggles + 1);
  };

  return (
    <S.PopupAuthor>
      {sortArrayOfAuthors.map((author, i) => {
        return (
          <S.PopupAuthorText
            key={author.i}
            onClick={() => {
              toggleAuthors(author);
            }}
          >
            <div>{author}</div>
          </S.PopupAuthorText>
        );
      })}
    </S.PopupAuthor>
  );
}

export default AuthorFilter;
