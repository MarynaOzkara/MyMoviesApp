import styled from 'styled-components';
export const ActorsWrap = styled.div`
  margin-top: 20px;
`;
export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 0;
  margin-bottom: 0;
  padding: 0;

  margin-left: auto;
  margin-right: auto;
`;
export const ActorItem = styled.li`
  background-color: ${props => props.theme.movieWrap};
  border-radius: var(--radii);
  overflow: hidden;
  list-style: none;
  margin-bottom: 10px;
  flex-basis: calc((100% - 2 * 10px) / 3);

  @media (min-width: 767px) {
    flex-basis: calc((100% - 3 * 10px) / 4);
  }
  @media (min-width: 1200px) {
    flex-basis: calc((100% - 5 * 10px) / 6);
  }
`;
export const ActorImg = styled.img`
  width: 100%;
`;
export const InfoList = styled.ul`
  margin: 4px 8px;
  padding: 0;
`;
export const InfoItem = styled.li`
  list-style: none;

  margin-bottom: 8px;
`;
export const InfoText = styled.p`
  font-size: var(--fs-ss);
  @media (min-width: 767px) {
    font-size: var(--fs-sm);
  }
`;
