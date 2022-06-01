import { FC } from "react";
import WishForm from "./pages/AddWish/WishForm";
import WishList from "./pages/WishList/WishList";
import { WishModel } from "./models/WishModel";

const App: FC = () => {
  return (
    <div className="wish-list">
      <div className="title">Wish list</div>
      <WishForm />
      <WishList />
    </div>
  );
};

export default App;
