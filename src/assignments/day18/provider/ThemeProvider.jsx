import ThemePage from "../context/ThemePage";

const ThemeProvider = ({ children }) => {

  const theme = "dark";

  return (
    <ThemePage.Provider value={{ theme }}>
      {children}
    </ThemePage.Provider>
  );
};

export default ThemeProvider;