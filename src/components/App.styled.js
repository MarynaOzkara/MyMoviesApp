import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 15px;
  color: ${props => props.theme.text};
  @media (min-width: 767px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
export const SubTitle = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  color: ${props => props.theme.text};
  @media (min-width: 767px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
export const GenresList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
export const MovieDetailsWrap = styled.div`
  @media (min-width: 767px) {
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
export const Poster = styled.img`
  border-radius: var(--radii);
  width: 100%;
  @media (min-width: 767px) {
    width: 300px;
  }
`;
export const MainWrap = styled.div`
  @media (min-width: 767px) {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
`;
export const AdditionalWrap = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid ${props => props.theme.text};
  border-top: 1px solid ${props => props.theme.text};
`;
export const Aditional = styled.h3`
  margin-top: 10px;
`;
export const AditionalList = styled.ul`
  padding-left: 10px;
`;
export const AdditionalItem = styled.li`
  list-style-type: none;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const BackBtn = styled.button`
  border: none;
  padding: 4px 8px;
  background-color: ${props => props.theme.brend};
  color: ${props => props.theme.acsent};
  border-radius: var(--radii);
  margin-bottom: 20px;
  border: 2px solid ${props => props.theme.brend};
  cursor: pointer;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: ${props => props.theme.acsent};
    color: ${props => props.theme.brend};
    border: 2px solid ${props => props.theme.brend};
  }
`;
export const MoviePageWrap = styled.div`
  margin-left: 20px;
  margin-top: 30px;
`;
export const MoreLink = styled(Link)`
  width: 100px;
  padding: 4px 8px;
  background-color: ${props => props.theme.brend};
  border-radius: 4px;
  color: ${props => props.theme.acsent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 2px solid ${props => props.theme.brend};
  cursor: pointer;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: ${props => props.theme.acsent};
    color: ${props => props.theme.brend};
    border: 2px solid ${props => props.theme.brend};
  }
`;
export const MovieInfoWrap = styled.div`
  background-color: ${props => props.theme.movieWrap};
  padding: 20px;
  border-radius: var(--radii);
  width: 100%;
  margin-top: 10px;
  @media (min-width: 767px) {
    margin-top: 0;
  }
`;
export const MovieTitle = styled.h2`
  margin-bottom: 30px;
`;
export const MovieInfo = styled.h3`
  margin-top: 15px;
  margin-bottom: 5px;
`;
