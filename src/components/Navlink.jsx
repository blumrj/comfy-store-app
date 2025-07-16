import { NavLink, useMatch } from "react-router-dom";

const Navlink = ({ path, label }) => {
  const linkPath = path ? path : "/";
  const isActive = useMatch(linkPath) ? true : false;

  return (
    <>
      {
        <NavLink
          to={linkPath}
          className={isActive ? `capitalize menu-active` : `capitalize`}
        >
          {label}
        </NavLink>}
    </>
  );
};

export default Navlink;
