import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const getThemeFromLocalStorage = () => {
  //get the theme from the local storage or return 'caramellatte'
  return localStorage.getItem("theme") || "caramellatte";
};

const ThemeToggle = () => {
  //setting the state of the theme and setting the value by calling the getThemeFromLocalStorage function which tries to get the theme from local storage and if there isn't one, it sets 'caramellatte' as default
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  // this is a function that handles the theme state change
  const toggleTheme = () => {
    const newTheme = theme === "caramellatte" ? "dim" : "caramellatte";

    setTheme(newTheme);
  };

  //every time the theme state changes, we set the theme in the html tag and add the current theme to local storage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        onChange={toggleTheme}
      />

      {/* sun icon */}
      <BsSunFill className="swap-on h-6 w-6 fill-current" />

      {/* moon icon */}
      <BsMoonFill className="swap-off h-6 w-6 fill-current" />
    </label>
  );
};

export default ThemeToggle;
