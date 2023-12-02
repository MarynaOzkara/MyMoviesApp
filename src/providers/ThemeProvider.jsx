import React, { createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // const [theme, setTheme] = useState('light');
  const theme = useSelector(selectTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);
  return (
    // <ThemeContext.Provider value={[theme, setTheme]}>
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
