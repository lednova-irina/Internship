import { WishModel } from "../models/WishModel";

export const StoreService = {
  // wishes: new Array<WishModel>(),
  addWish: (value: WishModel) => {
    value.id = Date.now().toString();
    localStorage.setItem(value.id, JSON.stringify(value));
  },
  getWish: (id: string) => localStorage.getItem(id),
  deleteWish: (id: string) => localStorage.removeItem(id),
  deleteAllWishes: () => localStorage.clear(),
};
