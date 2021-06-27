import { User, NavbarItem, Categories } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

export const navbarItems: Array<NavbarItem> = [
  { id: 1, name: "Home", isActive: true, link: "" },
  { id: 2, name: "Shop", isActive: false, link: "Collections/all" },
  { id: 3, name: "Collections", isActive: false, link: "Collections" },
  { id: 4, name: "Contact Us", isActive: false, link: "Contact" },
];

export const categories: Array<Categories> = [
  {
    id: 1,
    name: "Anklets",
    path: "anklets",
    img: "//cdn.shopify.com/s/files/1/0567/6033/6539/products/0be91e_4cde9fef67684781a2964292062fd73b_mv2_360x.jpg?v=1621332414 360w 360h",
  },
  {
    id: 2,
    name: "Braclets",
    path: "bracelets",
    img: "https://cdn.shopify.com/s/files/1/0567/6033/6539/products/0be91e_9768277c421e4eaabfe26343c86b45dd_mv2_360x.jpg?v=1621332401%20360w%20360h",
  },
  {
    id: 3,
    name: "Earrings",
    path: "earrings",
    img: "//cdn.shopify.com/s/files/1/0567/6033/6539/products/0be91e_54f8519d818244cc974a046cc85d2219_mv2_180x.jpg?v=1621332329 180w 180h",
  },
  {
    id: 4,
    name: "Hair Accessories",
    path: "hairaccessories",
    img: "//cdn.shopify.com/s/files/1/0567/6033/6539/products/0be91e_205c907b496847648e938ac821a03227_mv2_180x.jpg?v=1621332326 180w 180h",
  },
  {
    id: 5,
    name: "Necklace",
    path: "necklace",
    img: "//cdn.shopify.com/s/files/1/0567/6033/6539/products/0be91e_fbd147740cd14812967952027f888e7a_mv2_180x.jpg?v=1621332290 180w 180h",
  },
  {
    id: 5,
    name: "Rings",
    path: "rings",
    img: "//cdn.shopify.com/s/files/1/0567/6033/6539/collections/0be91e_097f6b345ce246f881fe0d59aca1bce9_mv2_180x.jpg?v=1621332063 180w 180h",
  },
  {
    id: 5,
    name: "Waist Chain",
    path: "waistchain",
    img: "//cdn.shopify.com/s/files/1/0567/6033/6539/products/0be91e_352f0be8f6ac4f039a89837a18b75e69_mv2_180x.jpg?v=1621332419 180w 180h",
  },
];
