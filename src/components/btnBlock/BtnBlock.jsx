import { useParams, Link } from 'react-router-dom';
import { lessonsList } from '../../content/lessonList';
import { getLevelName } from '../../content/getLevelName';
import * as S from './styles';

export const BtnBlock = ({
  setCurrentSlide,
  setIsPlaying,
  setNumberPhrase,
  setPhraseCounter,
  setWordIndex,
}) => {
  const { id } = useParams();
  const lessonId = parseInt(id);
  const isFirstLesson = lessonId === 1;
  const isLastLesson = lessonId === lessonsList.length;

  const handleGo = () => {
    setCurrentSlide(0);
    setIsPlaying(false);
    setNumberPhrase(0);
    setPhraseCounter(0);
    setWordIndex(0);
  };

  return (
    <S.ButtonsBlock>
      <S.ButtonsBlockNavLevel>
        <Link to={`/lesson/${lessonId - 1}`}>
          <S.ButtonsTop
            onClick={handleGo}
            disabled={isFirstLesson}
            $isFirstLesson={isFirstLesson}
          >
            Назад
          </S.ButtonsTop>
        </Link>

        <S.ButtonsTopLevel>
          {lessonId}
          {' - '}
          {getLevelName(Math.ceil(lessonId / 50))}
        </S.ButtonsTopLevel>

        <Link to={`/lesson/${lessonId + 1}`}>
          <S.ButtonsTopAhead
            onClick={handleGo}
            disabled={isLastLesson}
            $isLastLesson={isLastLesson}
          >
            Дальше
          </S.ButtonsTopAhead>
        </Link>
      </S.ButtonsBlockNavLevel>
    </S.ButtonsBlock>
  );
};
