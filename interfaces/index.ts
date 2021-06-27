// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}
export type NavbarItem = {
  id: number;
  name: string
  isActive: boolean
  link:string
}
export type Categories = {
  id:number;
  name: string;
  path: string;
  img: string;
}

export type Productobjecttype = {
  image: string;
  id: number;
  description: string;
  price: number;
  title: string;
  category: string;
};
export interface ProductPageProps {
  title: string | null;
  productData: Array<Productobjecttype>;
}