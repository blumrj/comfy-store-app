import React from "react";
import { useMatches, Link } from "react-router-dom";

const Breadcrumbs = () => {
  // useMatches() is a react router hook which returns an array of route match objects. each matched route stores things such pathname, loaderData, handle obj with custom data we defined for that route, params (dynamic ids for example)
  const matches = useMatches();

  //we want to find the matches that have the breadcrumb property defined in the handle obj, then we want to map over those items and check if the breadcrumb property is a function. if it is, we call it, if it's not, we just get the value. We then define an object with 'label' and 'to' keys to store the breadcrumb value and the pathname
  //we defined breadcrumb as a function in order to retrieve the actual name of the current product instead of the id
  const crumbs = matches
    .filter((item) => item.handle?.breadcrumb)
    .map((item) => {
      const label =
        typeof item.handle.breadcrumb === "function"
          ? item.handle.breadcrumb(item)
          : item.handle.breadcrumb;

      return {
        label,
        to: item.pathname,
      };
    });

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {/* we are mapping over the matched paths and displaying them */}
        {crumbs.map((crumb, index) => {
          //we don't want to make the last item clickable
          const isLast = index === crumbs.length - 1;
          const { label, to } = crumb;
          return (
            <li key={index}>
              {isLast ? (
                <span className="capitalize pointer-events-none">{label}</span>
              ) : (
                <Link to={to} className="capitalize">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
