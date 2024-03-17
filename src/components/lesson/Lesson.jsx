import { NavLink } from 'react-router-dom';
import * as S from './styles';

export const Lesson = ({ title, index }) => {
  return (
    <NavLink to={`/lesson/${index}`}>
      <S.Project>
        <S.ProjectTitle>{title}</S.ProjectTitle>
      </S.Project>
    </NavLink>
  );
};

