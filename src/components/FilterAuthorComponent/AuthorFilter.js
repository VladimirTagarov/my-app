import * as S from "./AuthorFilter.style";

function AuthorFilter() {
  const author = [
    "Nero",
    "Dynoro, Outwork, Mr. Gee",
    "Ali Bakgor",
    "Стоункат, Psychopath",
    "Jaded, Will Clarke, AR/CO",
    "Blue Foundation, Zeds Dead",
    "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
    "minthaze",
    "Calvin Harris, Disciples",
    "Tom Baker",
  ];
  return (
    <S.PopupAuthor>
      {author.map((element, i) => (
        <S.PopupAuthorText key={i}>{element}</S.PopupAuthorText>
      ))}
    </S.PopupAuthor>
  );
}

export default AuthorFilter;
