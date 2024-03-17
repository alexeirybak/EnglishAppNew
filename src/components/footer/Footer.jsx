import * as S from './styles';

export const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterWrapper>
          <S.Copyright>
            Инфографика частично предоставлена{' '}
            <S.Infolink href='https://icons8.com/'>Icons8.com</S.Infolink>
          </S.Copyright>
          <S.Copyright>© {currentDate} YORIC</S.Copyright>
        </S.FooterWrapper>
      </S.FooterContainer>
    </S.Footer>
  );
};
