export interface WishModel {
  id: string;
  title: string;
  description: string;
  link?: string;
  price?: number;
  currency?: string;
}

export interface ViewWishModel extends WishModel {}
