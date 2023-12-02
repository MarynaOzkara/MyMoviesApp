import styled from 'styled-components';
export const ReviewWrap = styled.li`
  list-style: none;
  background-color: ${props => props.theme.movieWrap};
  padding: 20px;
  border-radius: var(--radii);
  width: 100%;
  margin-bottom: 10px;
  /* @media (min-width: 767px) {
    margin-top: 0;
  } */
`;
export const ReviewList = styled.ul`
  margin-top: 10px;
  padding: 0;
`;
export const ReviewText = styled.p`
  margin-top: 8px;
  font-size: var(--fs-ss);
  @media (min-width: 767px) {
    font-size: var(--fs-sm);
  }
`;
