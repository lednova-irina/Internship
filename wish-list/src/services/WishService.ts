import { WishModel } from "../models/WishModel";

export const WishService = {
  wishes: new Array<WishModel>(),
  addWish: (wish: WishModel) => {
    WishService.wishes.push(wish);
  },
};
