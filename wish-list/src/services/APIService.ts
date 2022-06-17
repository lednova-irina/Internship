import axios from 'axios';

import {WishAPIModel} from '../models/WishAPIModel';
import {WishModel} from '../models/WishModel';
import ErrorService from './ErrorService';

const pathAPI = 'https://heartbreaking-florentine-begonia.glitch.me';

const APIService = {
  getAllWishes: async (): Promise<Array<WishModel>> => {
    try {
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
    } catch (error: any) {
      ErrorService.addError(error.message);
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
      ErrorService.addError(error.message);
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
      ErrorService.addError(error.message);
    }
    return null;
  },
  editWish: async (wish: WishModel) => {
    try {
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
    } catch (error: any) {
      ErrorService.addError(error.message);
    }
  },
  deleteWish: async (id: string) => {
    try {
      const existingWish = await APIService.getWish(id);
      if (existingWish) {
        await axios.delete(`${pathAPI}/api/wishlist/items/${id}`);
      }
    } catch (error: any) {
      ErrorService.addError(error.message);
    }
  },
};

export default APIService;
