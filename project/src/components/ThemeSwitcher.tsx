import{ useState } from 'react'

/**
 * ThemeSwitcher Component
 * @param {function} render - A function that takes the theme state and theme toggle function as arguments.
 * @return {JSX.Element} The rendered component with theme toggling capabilities.
 */

// Define the Props interface with the correct type signature for render
interface Props {
  render: (isThemeDark: boolean, handleThemeChange: () => void) => JSX.Element
}

export const ThemeSwitcher = ({ render }: Props) => {
  // State to track whether the theme is dark
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false)

  // Function to toggle the theme between light and dark
  const handleThemeChange = () => {
    setIsThemeDark(!isThemeDark)
  }

  // Render the UI with the current theme state and toggle function
  return render(isThemeDark, handleThemeChange)
}
