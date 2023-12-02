import styled from 'styled-components';
export const TrailerContainer = styled.div`
  margin-top: 40px;
`;

export const TrailerWrap = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  margin: 0 auto;
  border-radius: var(--radii);
  overflow: hidden;
  @media (min-width: 767px) {
    width: 640px;
    height: 360px;
  }
`;
