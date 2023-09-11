import * as S from "./GenreFilter.style";

function GenreFilter() {
  const genre = [
    "Рок",
    "Хип-Хоп",
    "Поп-музыка",
    "Техно",
    "Инди",
    "Металл",
    "Классическая музыка",
  ];
  return (
    <S.PopupGenre>
      {genre.map((element, i) => (
        <S.PopupGenreText className="popup__genre-text" key={i}>
          {element}
        </S.PopupGenreText>
      ))}
    </S.PopupGenre>
  );
}

export default GenreFilter;
