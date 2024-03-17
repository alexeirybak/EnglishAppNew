import { Link } from 'react-router-dom';
import * as S from './styles';

export const Contacts = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Title1>Contacts</S.Title1>
        <S.ContentList>
          <S.ContentListItem>
            <S.Title2>Location</S.Title2>
            <S.Paragraph>Severodvinsk, Russia</S.Paragraph>
          </S.ContentListItem>
          <S.ContentListItem>
            <S.Title2>Telegram / WhatsApp</S.Title2>
            <S.Paragraph>
              <S.Contacts href='tel:+7116562208'>+7 (911) 656-22-08</S.Contacts>
            </S.Paragraph>
          </S.ContentListItem>
          <S.ContentListItem>
            <S.Title2>Email</S.Title2>
            <S.Paragraph>
              <S.Contacts href='mailto:rybak2108@gmail.com'>rybak2108@gmail.com</S.Contacts>
            </S.Paragraph>
          </S.ContentListItem>
        </S.ContentList>
      </S.Container>
    </S.Section>
  );
};
