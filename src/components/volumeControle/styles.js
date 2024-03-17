import styled from 'styled-components';

export const VolumeControl = styled.div`
  position: fixed;
  right: 0;
  width: 30px;
  top: 270px;
  display: flex;
  flex-direction: column-reverse;
  row-gap: 8px;
  align-items: center;
  @-moz-document url-prefix() {
    top: 65px;
    margin-right: 20px;
  }
`;

export const VolumeBlock = styled.div`
  background-color: var(--page-bg);
  transform: rotate(270deg);
  position: absolute;
  display: flex;
  border-radius: 20px 70px 0 0;
  padding: 10px 0 20px 20px;
  display: flex;
  @media (max-width: 768px) {
    padding: 0;
  }

  @-moz-document url-prefix() {
    position: relative;
    transform: rotate(0deg);
    display: flex;
    flex-direction: column-reverse;
    border-radius: 20px;
    padding: 20px 5px;
    top: 10px;
  }
`;

export const Controller = styled.input`
  width: 120px;
  @-moz-document url-prefix() {
    transform: none;
    height: auto; 
    width: auto;
  }
}`;

export const Mute = styled.button`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  @-moz-document url-prefix() {
    width: auto;
  }
`;
export const MuteButton = styled.button`
  width: 25px;
`;

export const Icon = styled.img`
  transform: rotate(90deg);
  @-moz-document url-prefix() {
    position: unset;
    transform: rotate(0deg);
    width: auto;
  }
`;
