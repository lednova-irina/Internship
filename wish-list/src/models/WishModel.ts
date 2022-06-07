export interface WishModel {
  id: string | undefined;
  title: string;
  description: string | undefined;
  link?: string;
  price?: number;
  currency?: string;
}
