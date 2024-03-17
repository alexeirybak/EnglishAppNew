import styled from 'styled-components';

export const ButtonsBlock = styled.div`
  display: flex;
  font-size: 22px;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 65px;
  margin: auto;
  width: 80%;
  z-index: 2;
  height: 0px;
`;

export const ButtonsBlockNavLevel = styled.div`
  display: flex;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 40px;
`;

export const ButtonsTop = styled.button`
background-color: #c8102e;
color: #fff;
height: 50px;
width: 130px;
border-radius: 0 0 0 12px;
color: ${(props) => (props.$isFirstLesson ? '#888' : '#fff')};

&: hover {
  background-color: #555;
}

@media (max-width: 768px) {
  &:hover {
    background-color: #c8102e;
  }
}

@media (max-width: 768px) {
  &:active {
    background-color: #555;
  }
}

@media (max-width: 768px) {
  width: 100px;
  height: 40px;
  font-size: 1rem;
}

@media (max-width: 325px) {
  width: 60px;
}
`;

export const ButtonsTopLevel = styled(ButtonsTop)`
  background-color: #012169;
  border-radius: 0;
  width: 130px;
  &: hover {
    background-color: #012169;
  }
  @media (max-width: 768px) {
    width: 60px;
    height: 40px;
    font-size: 1rem;
  }
`;

export const ButtonsTopAhead = styled(ButtonsTop)`
  color: ${(props) => (props.$isLastLesson ? '#888' : '#fff')};
  border-radius: 0 0 12px 0;
`;
