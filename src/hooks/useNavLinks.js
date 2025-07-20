import { useSelector } from "react-redux";

// a custom hook that returns the path and the label of each nav route.
const useNavLinks = (routes) => {
  //get the user from the store
  const user = useSelector((state) => state.user.user);

  const links = routes[0].children
    //filtering the routes to include only:
    //1. routes with nav.show === true
    //2. routes that do NOT require auth, or require auth and the user IS logged in
    .filter((item) => {
      const nav = item.handle?.nav;

      if (!nav.show) return false;
      if (nav.authRequired && !user) return false;

      return true;
    })
    //map over the filtered items to return an array of objects with 'label' and 'to'
    .map((item) => {
      const label = item.handle?.nav?.label;
      const to = item.index ? "/" : item.path;

      return { label, to };
    });

  return links;
};

export default useNavLinks;
