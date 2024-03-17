import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { wordsList } from '../../content/wordsList';
import playIcon from './play.png';
import stopIcon from './stop.png';
import toLeft from './toLeft.png';
import toRight from './toRight.png';
import * as S from './styles';

const countElementsUpto = (i, list) => {
  return list.slice(0, i).reduce((acc, sublist) => acc + sublist.length, 0);
};

export const Words = ({
  transcription,
  currentSlide,
  setCurrentSlide,
  volume,
  wordIndex, 
  setWordIndex
}) => {
  const { id } = useParams();
  const progressBarRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isFirstWord, setIsFirstWord] = useState(true);
  const [isLastWord, setIsLastWord] = useState(false);
  const [progressProcentage, setProgressProcentage] = useState(0);
  const lessonId = parseInt(id);
  const words = wordsList[lessonId - 1];
  const audioRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const slideRef = useRef(null);
  
  const totalNumberOfWordsInAllLessons = wordsList.reduce(
    (acc, current) => acc + current.length,
    0
  );

  const speakWord = (wordIndex) => {
    if (id && words && words[wordIndex]) {
      setIsSpeaking(true);
      const trackUrl = `https://yoric.ru/audio/WORDS/words${id}/a${
        wordIndex + 1
      }.mp3`;
      audioRef.current.volume = volume;
      audioRef.current.src = trackUrl;
      audioRef.current.onerror = () => {
        console.error(`Failed to load audio from ${trackUrl}`);
        setIsSpeaking(false);
      };
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
        setIsSpeaking(false);
      });
    }
  };

  const onAudioEnded = () => {
    setIsSpeaking(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('ended', onAudioEnded);

    return () => {
      audio.removeEventListener('ended', onAudioEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, [audioRef]);

  const goToPrevSlide = () => {
    if (isSpeaking) return;
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? words.length - 1 : prevSlide - 1
    );
    const nextWordIndex =
      currentSlide === 0 ? words.length - 1 : currentSlide - 1;
    setWordIndex(nextWordIndex);
    setTimeout(() => {
      speakWord(nextWordIndex);
    }, 500);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === words.length - 1 ? 0 : prevSlide + 1
    );
    const nextWordIndex =
      currentSlide === words.length - 1 ? 0 : currentSlide + 1;
      setWordIndex(nextWordIndex);
    setTimeout(() => {
      speakWord(nextWordIndex);
    }, 500);
  };

  const playWord = () => {
    speakWord(wordIndex);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const xDiff = e.clientX - startX;
      if (xDiff > 100) {
        goToPrevSlide();
        setIsDragging(false);
      } else if (xDiff < -100) {
        goToNextSlide();
        setIsDragging(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const xDiff = e.touches[0].clientX - startX;
      if (xDiff > 100) {
        goToPrevSlide();
        setIsDragging(false);
      } else if (xDiff < -100) {
        goToNextSlide();
        setIsDragging(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    setProgressProcentage(((currentSlide + 1) / words.length) * 100);
  }, [currentSlide, words.length]);

  useEffect(() => {
    setIsFirstWord(currentSlide === 0);
    setIsLastWord(currentSlide === words.length - 1);
  }, [currentSlide, words.length]);

  const calculateProgress = () => {
    return ((currentSlide + 1) / words.length) * 100;
  };

  const handleProgressBarClick = (e) => {
    if (isSpeaking || !progressBarRef.current) return;
    const progressBar = progressBarRef.current;
    const sliderWidth = progressBar.clientWidth;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const wordIndex = Math.max(
      0,
      Math.min(
        words.length - 1,
        Math.floor((clickPosition / sliderWidth) * words.length)
      )
    );
    setCurrentSlide(wordIndex);
    setWordIndex(wordIndex);
  };

  return (
    <>
      <S.DictionaryHeader>
        Словарь к этому уроку: {words.length}
      </S.DictionaryHeader>
      <S.WordSlider>
        <S.Words>
          <S.WordComplect>
            <S.PrevNextBtn
              onClick={goToPrevSlide}
              disabled={currentSlide === 0 || isSpeaking}
              style={{ visibility: isFirstWord ? 'hidden' : 'visible' }}
            >
              <S.PrevNextImg src={toLeft} alt="Previous" />
            </S.PrevNextBtn>
            <S.WordBlock
              ref={slideRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <S.WordID>{words[currentSlide].id}</S.WordID>
              <S.WordImg
                src={`https://yoric.ru/audio/iconWords/iconWordsLesson${id}/p${words[currentSlide].id}.png`}
                alt={words[currentSlide].word}
              />
              <S.WordsProperties>
                <S.WordCurrent>{words[currentSlide].word}</S.WordCurrent>
                {transcription && (
                  <S.TranscriptionCurrent>
                    [{words[currentSlide].transcription}]
                  </S.TranscriptionCurrent>
                )}
                <S.TranslationCurrent>
                  {words[currentSlide].translation}
                </S.TranslationCurrent>
              </S.WordsProperties>
            </S.WordBlock>

            <S.PrevNextBtn
              onClick={goToNextSlide}
              disabled={isSpeaking}
              style={{ visibility: isLastWord ? 'hidden' : 'visible' }}
            >
              <S.PrevNextImg src={toRight} alt="Next" />
            </S.PrevNextBtn>
          </S.WordComplect>
        </S.Words>
        <S.Play onClick={() => playWord()}>
          <S.PlayImg
            src={isSpeaking ? stopIcon : playIcon}
            alt={isSpeaking ? 'Остановить' : 'Воспроизвести'}
          />
        </S.Play>
        <audio ref={audioRef} />
        <S.ProgressContainer
          ref={progressBarRef}
          onClick={handleProgressBarClick}
        >
          <S.ProgressBar
            style={{ width: `${progressProcentage}%` }}
          ></S.ProgressBar>
        </S.ProgressContainer>
        <S.ProgressValue>{calculateProgress().toFixed(0)}%</S.ProgressValue>
      </S.WordSlider>

      <S.Vocabulary>
        Слов в словарном запасе: {countElementsUpto(lessonId, wordsList)}
      </S.Vocabulary>
      <S.Vocabulary>
        Изучено:{' '}
        {Math.round(
          (countElementsUpto(lessonId, wordsList) /
            totalNumberOfWordsInAllLessons) *
            100
        )}
        % слов
      </S.Vocabulary>
    </>
  );
};
