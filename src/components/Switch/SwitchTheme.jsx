import { Toggle } from "keep-react";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

// Unused

export const SwitchTheme = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext)
  const handleThemeSwitch = () => {
    let test = theme === 'dark' ? 'light' : 'dark'
    console.log(test)
    handleChangeTheme(test)
  }
  return <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} onChange={() => handleThemeSwitch()} />
}