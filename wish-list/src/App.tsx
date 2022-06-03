import { FC } from "react";
import WishForm from "./pages/AddWish/WishForm";
import WishList from "./pages/WishList/WishList";
import Navbar from "./pages/Navbar";

const App: FC = () => {
  return (
    <div className="wish-list">
      <WishList />
    </div>
  );
};

export default App;
