type NavLink = {
  title: string;
  href: string;
  children?: never;
};

type NavParent = {
  title: string;
  href?: never;
  children: NavLink[];
};

export type NavItem = NavLink | NavParent;

export const navItems: NavItem[] = [
  {
    title: "Home",
    children: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    title: "Shop",
    children: [
      {
        title: "All Products",
        href: "/products",
      },
      {
        title: "Headphones",
        href: "/products/categories/headphones",
      },
      {
        title: "Laptops",
        href: "/products/categories/laptops",
      },
      {
        title: "Phones",
        href: "/products/categories/phones",
      },
      {
        title: "Laptop Accessories",
        href: "/products/categories/laptop-accessories",
      },
      {
        title: "Phone Accessories",
        href: "/products/categories/phone-accessories",
      },
    ],
  },
  {
    title: "My Account",
    children: [
      {
        title: "Cart",
        href: "/cart",
      },
      {
        title: "Checkout",
        href: "/checkout",
      },
      {
        title: "Wishlist",
        href: "/wishlist",
      },
      {
        title: "Login",
        href: "/login",
      },
      {
        title: "Signup",
        href: "/signup",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
