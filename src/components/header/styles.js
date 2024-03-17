import styled from 'styled-components';

export const Header = styled.header`
  padding-top: 40px;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--header-text);
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    }
  }
`;

export const HeaderWrapper = styled.div`
  padding: 0 15px;
  max-width: 660px;
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--text-color);

  strong {
    font-size: 60px;
    font-weight: 700;
  }

  em {
    font-style: normal;
    color: var(--accent);
  }

  @media screen and (max-width: 620px) {
    font-size: 30px;
    strong {
      font-size: 40px;
    }
  }
`;
