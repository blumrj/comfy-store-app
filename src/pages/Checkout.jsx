import { redirect } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (store) => () => {
  const { user } = store.getState();

   if (!user.user) {
    return redirect("/");
  }

  return null;
};

const Checkout = () => {
  return (
    <div>
      checkout
    </div>
  )
}

export default Checkout
