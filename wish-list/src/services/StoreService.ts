import { WishModel } from "../models/WishModel";
// const storeKey = "WishesStore";
export const StoreService = {
  storeKey: "WishesStore",
  getStore: (): Array<WishModel> =>
    localStorage.getItem(StoreService.storeKey)
      ? JSON.parse(localStorage.getItem(StoreService.storeKey) as string)
      : new Array<WishModel>(),
  setStorage: (store: Array<WishModel>) =>
    localStorage.setItem(StoreService.storeKey, JSON.stringify(store)),

  addWish: (value: WishModel) => {
    const store = StoreService.getStore();

    value.id = Date.now().toString();
    store.push(value);
    StoreService.setStorage(store);
  },
  editWish: (wish: WishModel) => {
    const store = StoreService.getStore();
    const wishItemIndex = store.findIndex((w) => w.id === wish.id);
    if (wishItemIndex >= 0) {
      store[wishItemIndex] = wish;
      StoreService.setStorage(store);
      return true;
    }
    return false;
  },
  addOrEdit: (wish: WishModel) => {
    const isEdit = StoreService.editWish(wish);
    if (!isEdit) {
      StoreService.addWish(wish);
    }
  },
  getWish: (id: string) => {
    const store = StoreService.getStore();
    return store.find((wish) => wish.id === id);
  },
  deleteWish: (id: string) => {
    const store = StoreService.getStore();
    const result = store.filter((wish) => {
      return wish.id !== id;
    });
    StoreService.setStorage(result);
  },
  deleteAllWishes: () => {
    StoreService.setStorage(new Array<WishModel>());
  },
};