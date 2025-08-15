import { NavLink, useMatch } from "react-router-dom";

const Navlink = ({ to, label, handleLinkClick }) => {
  const linkPath = to ? to : "/";
  const isActive = useMatch(linkPath) ? true : false;

  return (
    <>
      {
        <NavLink
          to={linkPath}
          className={isActive ? `capitalize menu-active` : `capitalize`}
          onClick={handleLinkClick}
        >
          {label}
        </NavLink>}
    </>
  );
};

export default Navlink;
