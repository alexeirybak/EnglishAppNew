import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { lessonsList } from '../../content/lessonList';
import playIcon from './play.png';
import stopIcon from './stop.png';
import * as S from './styles';

export const Phrases = ({ transcription, volume }) => {
  const { id } = useParams();
  const lessonId = parseInt(id);
  const lesson = lessonsList[lessonId - 1];
  const [isSpeakingPhrases, setIsSpeakingPhrases] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPhraseId, setCurrentPhraseId] = useState(null);
  const audioRef = useRef(null);
  const [message, setMessage] = useState(null);
  const [isFlippedArray, setIsFlippedArray] = useState(
    Array(transcription.length).fill(false)
  );

  const speakWord = (phraseId) => {
    setCurrentPhraseId(phraseId);
    setIsSpeakingPhrases(true);
    setIsPlaying(true);

    const audio = new Audio(
      `https://yoric.ru/audio/SOUNDS/sounds${lessonId}/s${phraseId}.mp3`
    );

    audio.volume = volume;
    audio.play().catch((error) => {
      setMessage('Этот урок еще не озвучен. Скоро-скоро...');
      console.error('Failed to load audio:', error);
    });

    audio.addEventListener('ended', () => {
      setIsSpeakingPhrases(false);
    });

    audioRef.current = audio;
  };

  const pauseAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        setMessage('Этот урок еще не озвучен. Скоро-скоро...');
        console.error('Failed to play audio:', error);
      });
    } else {
      audioRef.current.pause();
    }
  };

  const onAudioEnded = () => {
    setIsSpeakingPhrases(false);
  };

  useEffect(() => {
    setMessage(null);
  }, [lessonId, isPlaying]);

  useEffect(() => {
    setIsFlippedArray(Array(lesson[1].length).fill(true));
  }, [lesson, lessonId, setIsFlippedArray]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('ended', onAudioEnded);

    return () => {
      audio.removeEventListener('ended', onAudioEnded);
    };
  }, [audioRef]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, [audioRef]);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [audioRef, volume]);

  const handleFlip = (index) => {
    const newIsFlippedArray = [...isFlippedArray];
    newIsFlippedArray[index] = !newIsFlippedArray[index];
    setIsFlippedArray(newIsFlippedArray);
  };

  const handleToggleAllPhrases = () => {
    const allFlipped = isFlippedArray.every((isFlipped) => isFlipped);
    setIsFlippedArray(Array(lesson[1].length).fill(!allFlipped));
  };

  return (
    <S.PhrasePart>
      <S.HeaderLessonPhrases>Phrases to remember:</S.HeaderLessonPhrases>
      <S.BtnCloser onClick={handleToggleAllPhrases}>
        {isFlippedArray.every((isFlipped) => isFlipped)
          ? 'Закрыть перевод на английский'
          : 'Открыть перевод на английский'}
      </S.BtnCloser>
      <S.Phrases>
        <S.PhrasesBlock>
          <S.HeadTable $transcription={transcription}>
            <S.EmptyCell> </S.EmptyCell>
            <S.ExpressionCell>Expression</S.ExpressionCell>
            {transcription && (
              <S.TranscriptionCell>Transcription (UK)</S.TranscriptionCell>
            )}
            <S.TranslationCell>Translation</S.TranslationCell>
          </S.HeadTable>
          {lesson[1].map((item, index) => (
            <S.PhraseItem key={item.id} $transcription={transcription}>
              <S.PlugBlock>
                <S.PhraseNumber>{item.id}</S.PhraseNumber>
                {!isPlaying ? (
                  <S.Play onClick={() => speakWord(item.id)}>
                    {message && <S.Message>{message}</S.Message>}
                    <S.PlayImg src={playIcon} alt={'Воспроизвести'} />
                  </S.Play>
                ) : isSpeakingPhrases && currentPhraseId === item.id ? (
                  <S.Play onClick={() => pauseAudio()}>
                    {message && <S.Message>{message}</S.Message>}
                    <S.PlayImg src={stopIcon} alt={'Пауза'} />
                  </S.Play>
                ) : (
                  <S.Play onClick={() => speakWord(item.id)}>
                    <S.PlayImg src={playIcon} alt={'Воспроизвести'} />
                  </S.Play>
                )}
              </S.PlugBlock>
              <S.ExpressionItem>{item.expression}</S.ExpressionItem>
              {transcription && (
                // <S.PhraseContainer>
                  <S.PhraseContainer onClick={() => handleFlip(index)}>
                  {isFlippedArray[index] ? (
                    <S.Phrase $isFlipped={isFlippedArray[index]}>
                      <S.TranscriptionItem>
                        {item.transcription}
                      </S.TranscriptionItem>
                    </S.Phrase>
                  ) : (
                    <S.TranslationMessage>
                      Your transcription is here
                    </S.TranslationMessage>
                  )}
                </S.PhraseContainer>
              )}
              {/* <S.PhraseContainer> */}
              <S.PhraseContainer onClick={() => handleFlip(index)}>
                {isFlippedArray[index] ? (
                  <S.Phrase $isFlipped={isFlippedArray[index]}>
                    <S.TranslationItem>{item.translation}</S.TranslationItem>
                  </S.Phrase>
                ) : (
                  <S.TranslationMessage>
                    Your English phrase is here
                  </S.TranslationMessage>
                )}
              </S.PhraseContainer>
              {!isPlaying ? (
                <S.PlayDesk onClick={() => speakWord(item.id)}>
                  {message && <S.Message>{message}</S.Message>}
                  <S.PlayImg src={playIcon} alt={'Воспроизвести'} />
                </S.PlayDesk>
              ) : isSpeakingPhrases && currentPhraseId === item.id ? (
                <S.PlayDesk onClick={() => pauseAudio()}>
                  {message && <S.Message>{message}</S.Message>}
                  <S.PlayImg src={stopIcon} alt={'Пауза'} />
                </S.PlayDesk>
              ) : (
                <S.PlayDesk onClick={() => speakWord(item.id)}>
                  <S.PlayImg src={playIcon} alt={'Воспроизвести'} />
                </S.PlayDesk>
              )}
              <audio ref={audioRef} />
            </S.PhraseItem>
          ))}
        </S.PhrasesBlock>
      </S.Phrases>
    </S.PhrasePart>
  );
};
