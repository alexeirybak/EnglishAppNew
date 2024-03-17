import styled from 'styled-components';

export const DictionaryHeader = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (max-width: 425px) {
    font-size: 1.2rem;
    padding-bottom: 20px;
  }
`;

export const Vocabulary = styled.div`
  font-size: 1.2rem;
  margin-top: 25px;
  margin-bottom: 25px;
  color: var(--id-word);
  text-align: center;
`;

export const WordSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Words = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
`;

export const WordComplect = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PrevNextBtn = styled.button``;

export const PrevNextImg = styled.img``;

export const WordBlock = styled.div`
  text-align: center;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 240px;
  height: auto;
  border: 3px solid var(--page-bg-tab);
  padding: 30px 10px 20px;
  border-radius: 5px;
  margin: 10px;
  position: relative;
  @media screen and (max-width: 325px) {
    width: 200px;
  }
`;

export const WordID = styled.div`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  background-color: var(--id-word);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -16px;
`;

export const WordImg = styled.img`
  min-width: 96px;
  border-radius: 5px;
`;

export const WordsProperties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WordCurrent = styled.p`
  word-break: break-word;
`;

export const TranscriptionCurrent = styled.p`
  word-break: break-word;
`;

export const TranslationCurrent = styled.p`
  word-break: break-word;
`;

export const Play = styled.button``;

export const PlayImg = styled.img``;

export const ProgressContainer = styled.div`
  width: 240px;
  background-color: #ccc;
  border-radius: 10px;
  padding: 2px;
  overflow: hidden;
  margin-top: 15px;
  cursor: pointer;
  @media screen and (max-width: 325px) {
    width: 200px;
    padding: 1px;
    border-radius: 3px;
  }
`;

export const ProgressBar = styled.div`
  width: ${(props) => props.value || 0}%;
  height: 16px;
  background-color: #0062cc;
  transition: width 0.3s ease;
  border-radius: 10px;
  @media screen and (max-width: 325px) {
    border-radius: 3px;
    height: 10px;
  }
`;

export const ProgressValue = styled.div`
  line-height: 20px;
  z-index: 0;
  margin-top: 15px;
`;
