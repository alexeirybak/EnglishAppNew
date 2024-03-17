import styled from 'styled-components';

export const Project = styled.div`
  width: 370px;
  height: 120px;
  background-color: var(--project-card-bg);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 270px;
    height: auto;
    min-height: 70px;
  }
  @media screen and (max-width: 375px) {
    width: 220px;
  }
`;

export const ProjectTitle = styled.h3`
  padding: 15px 20px;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.3;
  color: var(--project-card-text);
`;
