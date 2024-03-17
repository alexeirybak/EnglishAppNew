
import Header from '../components/header/Header';
import * as S from './styles';

export const Home = () => {
  return (
    <>
      <S.Section>
        <S.Container>
          <Header />
          <S.ContentList>
            <S.ContentListItem>
              <S.Title2>Английский язык</S.Title2>
              <S.Paragraph>От A0 до C1</S.Paragraph>
            </S.ContentListItem>
            <S.ContentListItem>
              <S.Title2>Теория и практика</S.Title2>
              <S.Paragraph>Слова, выражения, аудирование</S.Paragraph>
              <S.ParagraphMethod>По методике Александра Бебриса</S.ParagraphMethod>
              <S.StyledLink to='/lessons'>К урокам</S.StyledLink>
            </S.ContentListItem>
          </S.ContentList>
        </S.Container>
      </S.Section>
    </>
  );
};
