import styled, { keyframes, css } from 'styled-components';

export const BtnsAllTracks = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: #012169;
  padding: 15px 15px 25px 15px;
  border-radius: 12px;
`;

export const BtnsBlock = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 15px;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 15px;
    padding: 18px;
  }
  @media (max-width: 480px) {
    padding: 15px;
  }
  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const BtnsAllTracksText = styled.div`
  font-size: 1.4rem;
  padding-bottom: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const PlayingBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TransmissionBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const PlayerBlock = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 30px;
  align-items: center;
  row-gap: 10px;
`;

export const PlayerBtnBlock = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  margin-top: 20px;
`;

const blinkAnimation = keyframes`
  0% { background-color: #aaa; }
  50% { background-color: #eee; }
  100% { background-color: #aaa; }
;`;

export const SettingsButton = styled.button`
  background-color: #aaa;
  padding: 2px;
  border-radius: 3px;
  &:hover {
    background-color: #eee;
  }
`;

export const SettingsButtonPause = styled(SettingsButton)`
  animation: ${blinkAnimation} 0.6s infinite;
`;

export const Order = styled.div``;

export const SettingsIcon = styled.img`
  width: 40px;
`;

export const SentenceNumber = styled.p``;

export const ProgressContainer = styled.div`
  width: auto;
  background-color: #eee;
  border-radius: 10px;
  padding: 2px;
  overflow: hidden;
  margin-top: 15px;
  cursor: pointer;
  @media screen and (max-width: 325px) {
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
