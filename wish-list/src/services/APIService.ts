import axios from 'axios';
import {WishAPIModel} from '../models/WishAPIModel';
import {WishModel} from '../models/WishModel';

const pathAPI = 'https://heartbreaking-florentine-begonia.glitch.me';

const APIService = {
  getAllWishes: async (): Promise<Array<WishModel>> => {
    const response = await axios.get<Array<WishAPIModel>>(
      `${pathAPI}/api/wishlist/itemsf`,
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
  },
  addWish: async (value: WishModel) => {
    const model: WishAPIModel = {
      id: '',
      name: value.title,
      description: value.description,
      url: value.link,
    };
    await axios.post(`${pathAPI}/api/wishlist/items`, model);
  },
  getWish: async (id: string) => {
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
  },
  editWish: async (wish: WishModel) => {
    const existingWish = await APIService.getWish(wish.id);
    if (existingWish) {
      const model: WishAPIModel = {
        id: wish.id,
        name: wish.title,
        description: wish.description,
        url: wish.link,
      };
      await axios.put(`${pathAPI}/api/wishlist/items/${wish.id}`, model);
    }
  },
  deleteWish: async (id: string) => {
    const existingWish = await APIService.getWish(id);
    if (existingWish) {
      await axios.delete(`${pathAPI}/api/wishlist/items/${id}`);
    }
  },
};

export default APIService;
