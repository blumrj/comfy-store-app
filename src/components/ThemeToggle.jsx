import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";


const ThemeToggle = () => {
  const dispatch = useDispatch()

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        onChange={() => dispatch(toggleTheme())}
      />

      {/* sun icon */}
      <BsSunFill className="swap-on h-6 w-6 fill-current" />

      {/* moon icon */}
      <BsMoonFill className="swap-off h-6 w-6 fill-current" />
    </label>
  );
};

export default ThemeToggle;
