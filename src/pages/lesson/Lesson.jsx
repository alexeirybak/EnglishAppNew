import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BtnBlock } from '../../components/btnBlock/BtnBlock';
import { lessonsList } from '../../content/lessonList';
import { wordsList } from '../../content/wordsList';
import { Words } from '../../components/words/Words';
import { Phrases } from '../../components/phrases/Phrases';
import { Player } from '../../components/player/Player';
import { VolumeControle } from '../../components/volumeControle/VolumeControle';
import * as S from './styles';
import './styles.css';

export const Lesson = ({
  currentLesson,
  transcription,
}) => {
  const { id } = useParams();
  const [isWords, setIsWords] = useState(false);
  const [isTheory, setIsTheory] = useState(false);
  const [isPhrases, setIsPhrases] = useState(false);
  const [isPlayer, setIsPlayer] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [numberPhrase, setNumberPhrase] = useState(0);
  const [phraseCounter, setPhraseCounter] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const lessonId = id ? parseInt(id) : currentLesson;
  const lesson = lessonsList[lessonId - 1];
  const words = wordsList[lessonId - 1];
  const [wordIndex, setWordIndex] = useState(0);
  const theory = lesson[2]?.theory || 0;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleToggleWords = () => {
    setIsWords(!isWords);
  };

  const handleToggleTheory = () => {
    setIsTheory(!isTheory);
  };

  const handleTogglePhrases = () => {
    setIsPhrases(!isPhrases);
  };

  const handleTogglePlayer = () => {
    setIsPlayer(!isPlayer);
  };

  return (
    <S.Lesson>
      <BtnBlock
        setCurrentSlide={setCurrentSlide}
        setIsPlaying={setIsPlaying}
        setNumberPhrase={setNumberPhrase}
        setPhraseCounter={setPhraseCounter}
        setWordIndex={setWordIndex}
      />
      <VolumeControle volume={volume} setVolume={setVolume} />
      <S.HeaderLesson>{lesson[0].title}</S.HeaderLesson>
      <S.BtnWords $isWords={isWords} onClick={handleToggleWords}>
        {isWords ? 'Закрыть слова' : 'Открыть слова'}
      </S.BtnWords>
      <S.WordsAcc $isWords={isWords}>
        {words && (
          <Words
            transcription={transcription}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
            volume={volume}
            wordIndex={wordIndex}
            setWordIndex={setWordIndex}
          />
        )}
      </S.WordsAcc>
      <S.BtnTheory $isTheory={isTheory} onClick={handleToggleTheory}>
        {isTheory ? 'Закрыть теорию' : 'Открыть теорию'}
      </S.BtnTheory>
      <S.TheoryAcc $isTheory={isTheory}>
        {lesson[2]?.theory && (
          <>
            <S.Theory>Теория:</S.Theory>
            <S.LessonTheory dangerouslySetInnerHTML={{ __html: theory }} />
          </>
        )}
      </S.TheoryAcc>
      <S.BtnPhrases $isPhrases={isPhrases} onClick={handleTogglePhrases}>
        {isPhrases ? 'Закрыть фразы' : 'Открыть фразы'}
      </S.BtnPhrases>
      <S.PhrasesAcc $isPhrases={isPhrases}>
        <Phrases
          transcription={transcription}
          volume={volume}
        />
      </S.PhrasesAcc>
      <S.BtnPlayer $isPlayer={isPlayer} onClick={handleTogglePlayer}>
        {isPlayer ? 'Закрыть плеер' : 'Открыть плеер'}
      </S.BtnPlayer>
      <S.PlayerAcc $isPlayer={isPlayer}>
        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          numberPhrase={numberPhrase}
          setNumberPhrase={setNumberPhrase}
          phraseCounter={phraseCounter}
          setPhraseCounter={setPhraseCounter}
          volume={volume}
        />
      </S.PlayerAcc>
      <S.Vocabulary>
        Пройдено: {((id / wordsList.length) * 100).toFixed(1)}% уроков
      </S.Vocabulary>
      <S.ToTop onClick={handleScrollToTop}>Наверх</S.ToTop>
    </S.Lesson>
  );
};
