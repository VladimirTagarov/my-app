import React, { useState } from "react";
import * as S from "./AuthorFilter.style";

function AuthorFilter({ tracks, setTracks }) {
  // const [arrayOfAuthors, setArrayOfAuthors] = useState([]);
  const [countOfToggles, setCountOfToggles] = useState(0);

  let arrayOfAuthors = [];
  arrayOfAuthors = tracks.map((track) => track.author);
  // console.log(arrayOfAuthors);
  const toggleAuthors = (authorsId) => {
    console.log(authorsId);
    // setCountOfToggles(countOfToggles + 1);
  };

  const author = [
    "Alexander Nakarada",
    "Frank Schroter",
    "Kevin Macleod",
    "Mixkit",
    "Waltz Piano",
    // "AFM",
    // "Bobby Marleni",
    // "Brian Holtz",
    // "Fanz",
    // "Luke",
    // "Ryan Craig Martin",
    // "Sascha Ende",
    // "Starforsh",
    // "Voisin",
    // "Audionautix",
    // "Kevin Macleodburn",
    // "MED",
    // "Tim Kulig",
    "Winniethemoog",
  ];

  return (
    // <S.PopupAuthor>
    //   {author.map((element, i) => (
    //     <S.PopupAuthorText key={i} onClick={console.log("1")}>
    //       <></>
    //       {element}
    //     </S.PopupAuthorText>
    //   ))}
    // </S.PopupAuthor>

    <S.PopupAuthor>
      {tracks.map((track, i) => {
        return (
          <S.PopupAuthorText key={track.id} onClick={toggleAuthors(track)}>
            <div>{track.author}</div>
          </S.PopupAuthorText>
        );
      })}
    </S.PopupAuthor>
  );
}

export default AuthorFilter;
