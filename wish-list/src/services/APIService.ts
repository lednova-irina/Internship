import axios from 'axios';

import {WishAPIModel} from '../models/WishAPIModel';
import {WishModel} from '../models/WishModel';

const pathAPI = 'https://heartbreaking-florentine-begonia.glitch.me';

const APIService = {
  getAllWishes: async (): Promise<Array<WishModel>> => {
    try {
      const response = await axios.get<Array<WishAPIModel>>(
        `${pathAPI}/api/wishlist/items`,
      );
      return response.data.map(
        (model) =>
          ({
            id: model.id,
            description: model.description,
            title: model.name,
            link: model.url,
          } as WishModel),
      );
    } catch (error: any) {
      alert(error);
    }
    return [];
  },
  addWish: async (value: WishModel) => {
    try {
      const model: WishAPIModel = {
        id: '',
        name: value.title,
        description: value.description,
        url: value.link,
      };
      await axios.post(`${pathAPI}/api/wishlist/items`, model);
    } catch (error: any) {
      alert(error);
    }
  },
  getWish: async (id: string) => {
    try {
      const response = await axios.get<WishAPIModel>(
        `${pathAPI}/api/wishlist/items/${id}`,
      );
      const {data} = response;

      return {
        id: data.id,
        description: data.description,
        title: data.name,
        link: data.url,
      } as WishModel;
    } catch (error: any) {
      alert(error);
    }
    return null;
  },
  // editWish: async (wish: WishModel) => {
  //   try {
  //     const store = APIService.getAllWishes();
  //     const wishItemIndex = store. ((w) => w.id === wish.id);
  //     await axios.put(`${pathAPI}/api/wishlist/items`);
  //   } catch (error: any) {
  //     alert(error);
  //   }
  // },
  // const store = StoreService.getAllWishes();
  // const wishItemIndex = store.findIndex((w) => w.id === wish.id);
  // if (wishItemIndex >= 0) {
  //   store[wishItemIndex] = wish;
  //   StoreService.setStorage(store);
  //   return true;
  // }
  // return false;
  // },
};

export default APIService;
