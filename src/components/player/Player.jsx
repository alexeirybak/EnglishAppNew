import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { lessonsList } from '../../content/lessonList';
import playIcon from './play.png';
import stopIcon from './stop.png';
import restartIcon from './restart.png';
import changeIcon from './change.png';
import * as S from './styles';

export const Player = ({
  isPlaying,
  setIsPlaying,
  numberPhrase,
  setNumberPhrase,
  phraseCounter,
  setPhraseCounter,
  volume,
}) => {
  const { id } = useParams();
  const lessonId = parseInt(id);
  const lesson = lessonsList[lessonId - 1];
  const [icon, setIcon] = useState(playIcon);
  const [stopPlaying, setStopPlaying] = useState(false);
  const audioRef = useRef(null);
  const [progressProcentage, setProgressProcentage] = useState(0);
  const progressBarRef = useRef(null);
  const [orderPlaying, setOrderPlaying] = useState(0);
  const transmissionOptions = [
    'Русско-английский',
    'Англо-русский',
    'Без перевода',
  ];

  useEffect(() => {
    setProgressProcentage((numberPhrase / lesson[1].length) * 100);
  }, [numberPhrase, lesson]);

  const handleProgressBarClick = (e) => {
    const progressBar = progressBarRef.current;
    const sliderWidth = progressBar.clientWidth;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const phraseIndex = Math.max(
      0,
      Math.min(
        lesson[1].length - 1,
        Math.floor((clickPosition / sliderWidth) * lesson[1].length)
      )
    );
    setNumberPhrase(phraseIndex);
    setPhraseCounter(phraseIndex);
  };

  useEffect(() => {
    const currentAudioRef = audioRef.current;
    setIsPlaying(false);
    setIcon(playIcon);
    setNumberPhrase(0);

    return () => {
      if (currentAudioRef) {
        currentAudioRef.pause();
        currentAudioRef.src = '';
        currentAudioRef.onended = null;
      }
    };
  }, [id, setIsPlaying, audioRef, setNumberPhrase]);

  const handleRestart = () => {
    setIsPlaying(true);
    setNumberPhrase(0);
    setPhraseCounter(0);
    playAllPhrases();
  };



  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [audioRef, volume]);

  const playAllPhrases = () => {
    setIsPlaying(true);
    setStopPlaying(false);
    setIcon(stopIcon);

    const playNextPhrase = (numberPhrase) => {
      if (numberPhrase >= lesson[1].length) {
        setIsPlaying(false);
        setIcon(playIcon);
        return;
      }

      const phrase = lesson[1][numberPhrase];
      const hasQuestionMark = /\?/.test(phrase.expression);
      setPhraseCounter(numberPhrase + 1);

      let audioFirstSrc, audioSecondSrc, audioSilenceFirst, audioSilenceSecond;

      if (orderPlaying === 0) {
        audioFirstSrc = `https://yoric.ru/audio/TRANSLATIONS/tran${lessonId}/r${phrase.id}.mp3`;
        audioSecondSrc = `https://yoric.ru/audio/SOUNDS/sounds${lessonId}/s${phrase.id}.mp3`;
      } else if (orderPlaying === 1) {
        audioFirstSrc = `https://yoric.ru/audio/SOUNDS/sounds${lessonId}/s${phrase.id}.mp3`;
        audioSecondSrc = `https://yoric.ru/audio/TRANSLATIONS/tran${lessonId}/r${phrase.id}.mp3`;
      } else {
        audioFirstSrc = `https://yoric.ru/audio/SOUNDS/sounds${lessonId}/s${phrase.id}.mp3`;
        audioSecondSrc = `https://yoric.ru/audio/silence.mp3`;
      }

      if (orderPlaying === 2) {
        audioSilenceFirst = 'https://yoric.ru/audio/silence3.mp3';
        audioSilenceSecond = 'https://yoric.ru/audio/silence3.mp3';
      } else {
        audioSilenceFirst = 'https://yoric.ru/audio/silence.mp3';
        audioSilenceSecond = 'https://yoric.ru/audio/silence2.mp3';
      }

      const playAudio = (src) => {
        audioRef.current.src = src;
        audioRef.current.load();
        audioRef.current.addEventListener('canplaythrough', () => {
          audioRef.current.play();
        });
      };

      if (hasQuestionMark && orderPlaying === 0) {
        playAudio('https://yoric.ru/audio/question.mp3');
      } else {
        playAudio('https://yoric.ru/audio/silence3.mp3');
      }

      audioRef.current.onended = async () => {
        playAudio(audioFirstSrc);
        audioRef.current.onended = async () => {
          playAudio(audioSilenceFirst);
          audioRef.current.onended = async () => {
            playAudio(audioSecondSrc);
            audioRef.current.onended = async () => {
              playAudio(audioSilenceSecond);
              audioRef.current.onended = () => {
                setNumberPhrase((prevNumberPhrase) => prevNumberPhrase + 1);
                if (!stopPlaying) {
                  playNextPhrase(numberPhrase + 1);
                }
              };
            };
          };
        };
      };
    };

    playNextPhrase(numberPhrase);
  };

  useEffect(() => {
    if (isPlaying) {
      playAllPhrases();
    }
  }, [numberPhrase, isPlaying, setNumberPhrase]);

  const handlePauseClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIcon(playIcon);
    } else {
      audioRef.current.play();
      setIcon(stopIcon);
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleOrderPlaying = () => {
    setOrderPlaying((orderPlaying + 1) % 3);
  };

  return (
    <S.BtnsAllTracks>
      <S.BtnsBlock>
        <S.BtnsAllTracksText>Воспроизвести весь плейлист</S.BtnsAllTracksText>
        <S.PlayingBlock>
          <S.TransmissionBlock>
            <S.Order>{transmissionOptions[orderPlaying]}</S.Order>
            <S.SettingsButton onClick={handleOrderPlaying}>
              <S.SettingsIcon src={changeIcon} alt="Изменить" />
            </S.SettingsButton>
          </S.TransmissionBlock>
          <S.PlayerBlock>
            <S.PlayerBtnBlock>
              {!isPlaying ? (
                <S.SettingsButton onClick={playAllPhrases}>
                  <S.SettingsIcon src={icon} alt="Воспроизвести" />
                </S.SettingsButton>
              ) : (
                <S.SettingsButtonPause onClick={handlePauseClick}>
                  <S.SettingsIcon src={icon} />
                </S.SettingsButtonPause>
              )}
              <audio ref={audioRef} />
              <S.SettingsButton onClick={handleRestart}>
                <S.SettingsIcon src={restartIcon} />
              </S.SettingsButton>
            </S.PlayerBtnBlock>

            <S.SentenceNumber>
              {phraseCounter} / {lesson[1].length}
            </S.SentenceNumber>
          </S.PlayerBlock>
        </S.PlayingBlock>
      </S.BtnsBlock>

      <S.ProgressContainer
        ref={progressBarRef}
        onClick={handleProgressBarClick}
      >
        <S.ProgressBar
          style={{ width: `${progressProcentage}%` }}
        ></S.ProgressBar>
      </S.ProgressContainer>
    </S.BtnsAllTracks>
  );
};
