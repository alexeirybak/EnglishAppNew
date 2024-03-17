import styled, { css, keyframes } from 'styled-components';

const flipAnimation = keyframes`
  0% {
    transform: perspective(400px) rotateX(0deg);
  }

  50% {
    transform: perspective(400px) rotateX(90deg);
  }

  100% {
    transform: perspective(400px) rotateX(180deg);
  }
`;

export const PhrasePart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PhrasesBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Phrases = styled.div`
  border: 3px solid var(--page-bg-tab);
  padding: 20px;
  border-radius: 12px;
  @media (max-width: 768px) {
    border: none;
    column-gap: 0;
    padding: 3px;
  }
`;

export const HeaderLessonPhrases = styled.h3`
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const BtnCloser = styled.button`
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: var(--id-word);
  padding: 10px;
  color: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeadTable = styled.div`
  display: grid;
  grid-template-columns: 48px ${(props) =>
      props.$transcription ? '1fr 1fr 1fr' : '1fr 1fr'} 48px;
  column-gap: 3rem;
  justify-content: start;
  font-size: 1.5rem;
  justify-items: center;
  @media (max-width: 768px) {
    display: none;
    column-gap: 0;
  }
`;

export const EmptyCell = styled.div``;

export const ExpressionCell = styled.div``;

export const TranscriptionCell = styled.div`
  text-align: center;
`;

export const TranslationCell = styled.div`
  text-align: center;
`;

export const Message = styled.p`
  background-color: #c8102e;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  width: 150px;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  color: white;
  position: absolute;
  right: 20px;
  z-index: 4;
`;

export const PhraseItem = styled.div`
  background-color: var(--page-bg);
  margin: 10px 18px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 48px ${(props) =>
      props.$transcription ? '1fr 1fr 1fr' : '1fr 1fr'} 48px;
  column-gap: 1rem;
  justify-content: start;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    row-gap: 2rem;
    justify-content: center;
    justify-items: center;
    font-size: 1.5rem;
    border: 2px dotted #c8102e;
    padding: 2rem;
  }
  @media (max-width: 375px) {
    grid-template-columns: auto;
    row-gap: 2rem;
    justify-content: center;
    justify-items: center;
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    row-gap: 1rem;
    font-size: 1rem;
    padding: 1rem;
  }
`;

export const PlugBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
  }
`;
export const PhraseNumber = styled.div`
  padding: 10px;
  background-color: var(--id-word);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const ExpressionItem = styled(PhraseNumber)`
  border: none;
  border-radius: 6px;
  background-color: var(--page-bg-tab);
  padding: 15px;
  word-break: break-word;
  display: block;
  color: var(--text-color);
  width: auto;
  height: 100%;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 360px;
    padding: 12px;
  }
  @media (max-width: 480px) {
    width: 300px;
    padding: 10px;
  }
  @media (max-width: 425px) {
    width: 240px;
    padding: 6px;
  }
  @media (max-width: 375px) {
    width: 170px;
  }
  @media (max-width: 280px) {
    width: 140px;
  }
`;

export const TranscriptionItem = styled(PhraseNumber)`
  border: none;
  border-radius: 6px;
  background-color: var(--page-bg-tab);
  padding: 15px;
  display: block;
  color: var(--text-color);
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  @media (max-width: 768px) {
    width: 360px;
    justify-content: flex-start;
    padding: 12px;
  }
  @media (max-width: 480px) {
    width: 300px;
    padding: 10px;
  }
  @media (max-width: 425px) {
    width: 240px;
    padding: 6px;
  }
  @media (max-width: 375px) {
    width: 170px;
  }
  @media (max-width: 280px) {
    width: 140px;
  }
`;

export const PhraseContainer = styled.div`
  width: auto;
  height: 100%;
  perspective: 1000px;
  background-color: var(--page-bg-tab);
  border-radius: 6px;
  cursor: pointer;
  perspective: 500px;
`;

export const Phrase = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${flipAnimation} 1s ease-in-out;
  animation-fill-mode: both;

  ${(props) =>
    props.$isFlipped &&
    css`
      animation-direction: reverse;
    `}
`;

export const TranslationItem = styled(PhraseNumber)`
  height: 100%;
  width: auto;
  border: none;
  border-radius: 6px;
  background-color: var(--page-bg-tab);
  padding: 15px;
  display: flex;
  color: var(--text-color);
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  @media (max-width: 768px) {
    width: 360px;
    justify-content: flex-start;
    padding: 12px;
  }
  @media (max-width: 480px) {
    width: 300px;
    padding: 10px;
  }
  @media (max-width: 425px) {
    width: 240px;
    padding: 6px;
  }
  @media (max-width: 375px) {
    width: 170px;
  }
  @media (max-width: 280px) {
    width: 140px;
  }
`;

export const TranslationMessage = styled(TranscriptionItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--id-word);
`;

export const Play = styled.button`
  display: none;
  @media (max-width: 768px) {
    border: 2px solid #aaa;
    background-color: #aaa;
    border-radius: 50%;
    display: block;
    border-radius: 50%;
    &:hover {
      background-color: #eee;
    }
  }
`;

export const PlayDesk = styled.button`
  background-color: #aaa;
  padding: 2px;
  border-radius: 3px;
  &:hover {
    background-color: #eee;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const PlayImg = styled.img`
  width: 43px;
  height: 43px;
  border: 2px solid #aaa;
  border-radius: 50%;
  cursor: pointer;
`;
