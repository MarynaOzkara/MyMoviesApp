import styled from 'styled-components';

export const SelectLang = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LangList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 80px;
  background-color: ${prop => prop.theme.acsent};
  box-shadow: var(--shadow);
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
`;
export const FlagItem = styled.li`
  padding: 4px;
  margin: 0;

  & p {
    font-size: 16px;
  }
  &:hover,
  :focus {
    background-color: ${prop => prop.theme.reverseBrend};
  }
  &:hover p,
  :focus p {
    color: ${prop => prop.theme.acsent};
  }
`;
export const GlobeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;
export const FlagBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;
