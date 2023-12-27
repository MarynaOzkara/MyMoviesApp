// import { useContext } from 'react';
import {
  ToggleLabel,
  ToggleBol,
  ToggleWrap,
  ToggleInput,
} from './ModeToggle.styled';
// import { ThemeContext } from 'providers/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/theme/themeSlice';
import { selectTheme } from 'redux/selectors';

const ModeToggle = () => {
  const dispatch = useDispatch();
  const prevTheme = useSelector(selectTheme);
  // const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    const theme = prevTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(theme));

    // setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <ToggleWrap>
        <ToggleInput type="checkbox" id="team-toggle" onClick={toggleTheme} />
        <ToggleLabel htmlFor="team-toggle">
          <ToggleBol></ToggleBol>
        </ToggleLabel>
      </ToggleWrap>
    </>
  );
};
export default ModeToggle;
