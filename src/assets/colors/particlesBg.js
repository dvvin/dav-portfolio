// eample colors: {dark: "#000000", light: "#ffffff"}

export const particleBgColors = () => {
  // for dark use atom one dark, for light use CLRS
  const background = (darkMode = false) => (darkMode ? '#503040' : '#f08080');
  const particle = (darkMode = false) => (darkMode ? '#d10300' : '#7ff07f');
  const links = (darkMode = false) => (darkMode ? '#00ced1' : '#7f7ff0');

  return {
    background,
    particle,
    links,
  };
};
