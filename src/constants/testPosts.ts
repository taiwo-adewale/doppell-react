import gamingLaptops from "/assets/gaming-laptop-students.jpeg";
import microUsb from "/assets/micro-usb-vs-type-c.jpg";
import phoneAddiction from "/assets/phone addiction.jpg";
import laptopAccessories from "/assets/laptop-accessories.jpeg";

export type Post = {
  title: string;
  slug: string;
  image: string;
};

export const testPosts: Post[] = [
  {
    title: "Top 10 Gaming Laptops of 2022",
    slug: "top-10-gaming-laptops-of-2022",
    image: gamingLaptops,
  },
  {
    title: "Micro USB vs USB type C",
    slug: "micro-usb-vs-usb-type-c",
    image: microUsb,
  },
  {
    title: "5 signs you are addicted to your phone",
    slug: "5-signs-you-are-addicted-to-your-phone",
    image: phoneAddiction,
  },
  {
    title: "3 accessories you need to get for your laptop FAST!",
    slug: "3-accessories-you-need-to-get-for-your-laptop-fast",
    image: laptopAccessories,
  },
];
