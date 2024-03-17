import { Lesson } from '../components/lesson/Lesson';
import { lessonsList } from '../content/lessonList';
import { getLevelNameList } from '../content/getLevelName';
import * as S from './styles';

export const Lessons = () => {
  const chunkSize = 50;
  const groupedLessons = lessonsList.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.Section>
      <S.Container>
        <S.Title1>Lessons</S.Title1>
        {groupedLessons.map((chunk, chunkIndex) => (
          <S.LessonsBlock key={chunkIndex}>
            <S.Title2>Уровень {getLevelNameList(chunkIndex + 1)}</S.Title2>
            <S.Projects>
              {chunk.map((lesson, index) => (
                <Lesson
                  key={`${chunkIndex}` - `${index}`}
                  title={lesson[0].title}
                  index={chunkIndex * chunkSize + index + 1}
                />
              ))}
            </S.Projects>
          </S.LessonsBlock>
        ))}
        <S.ToTop onClick={handleScrollToTop}>Наверх</S.ToTop>
      </S.Container>
    </S.Section>
  );
};
