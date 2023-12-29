import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px 15px;
  }
`;
export const MovieItem = styled.li`
  margin: 0 auto;
  list-style: none;
  max-width: 300px;
  background-color: ${props => props.theme.movieWrap};
  border-radius: var(--radii);
  overflow: hidden;
  position: relative;
  @media (min-width: 767px) {
    flex-basis: calc((100% - 2 * 15px) / 3);
  }
  @media (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 15px) / 4);
  }

  &:hover,
  :focus {
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  }
  &:hover img,
  :focus img {
    transform: scale(1.2);
  }
  & :hover h1,
  :focus h1 {
    color: tomato;
  }
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.text};
`;
export const PosterWrap = styled.div`
  display: inline-block;
  overflow: hidden;
  background: #000;
`;
export const Poster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  opacity: 0.8;
  /* width: 100%; */
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const FavWrap = styled.div`
  position: absolute;
  z-index: 20;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 4px;
`;
export const Title = styled.h1`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
