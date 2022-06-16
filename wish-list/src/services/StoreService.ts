import {AddWishModel} from '../models/AddWishModel';
import {WishModel} from '../models/WishModel';

const storeKey = 'WishesStore';

const StoreService = {
  getAllWishes: (): Array<WishModel> =>
    localStorage.getItem(storeKey)
      ? JSON.parse(localStorage.getItem(storeKey) as string)
      : [],
  setStorage: (store: Array<WishModel>) =>
    localStorage.setItem(storeKey, JSON.stringify(store)),

  addWish: (value: AddWishModel) => {
    const store = StoreService.getAllWishes();
    const model = {...value, id: Date.now().toString()};
    store.push(model);
    StoreService.setStorage(store);
  },
  editWish: (wish: WishModel) => {
    const store = StoreService.getAllWishes();
    const wishItemIndex = store.findIndex((w) => w.id === wish.id);
    if (wishItemIndex >= 0) {
      store[wishItemIndex] = wish;
      StoreService.setStorage(store);
      return true;
    }
    return false;
  },
  //   addOrEdit: (wish: WishModel) => {
  //     const isEdit = StoreService.editWish(wish);
  //     if (!isEdit) {
  //       StoreService.addWish(wish);
  //     }
  //   },
  getWish: (id: string) => {
    const store = StoreService.getAllWishes();
    return store.find((wish) => wish.id === id);
  },
  deleteWish: (id: string) => {
    const store = StoreService.getAllWishes();
    const result = store.filter((wish) => {
      return wish.id !== id;
    });
    StoreService.setStorage(result);
  },
  deleteAllWishes: () => {
    StoreService.setStorage([]);
  },
};

export default StoreService;
