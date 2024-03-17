import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.main`
  height: auto;
  background-color: var(--page-bg);
  color: var(--text-color);
  opacity: 0.93;
  margin-top: 100px;
  border-radius: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Title1 = styled.h1`
  margin-top: 60px;
  margin-bottom: 60px;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--title-1);
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 30px;
  }
`;

export const ContentList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  min-height: 400px;
  text-align: center;
  justify-content: space-around;
  padding-bottom: 30px;
`;

export const ContentListItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
  @media screen and (max-width: 620px) {
    font-size: 16px;
  }
`;

export const Title2 = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 15px;
`;

export const ParagraphMethod = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 45px;
`;

export const Contacts = styled.a`
  color: var(--text-color);
  &:hover {
    color: var(--accent);
  }
`;

export const Projects = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
`;

export const LessonsBlock = styled.div`
  margin-bottom: 45px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ToTop = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px 20px;
  z-index: 3;
  width: auto;
  background-color: var(--id-word);
  color: #eee;
  border-radius: 20px 0 0 0;
  font-size: 1.2rem;
`;

export const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
  border: 1px solid var(--text-color);
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    color: var(--accent);
  }
`;
