import { useState, useEffect } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";

import { CartItems } from "./CartItems";
import { NoCartItem } from "./NoCartItem";
import { CartTrigger } from "./CartTrigger";
import testImg from "/assets/iphone 14 pro max.jpg";
import testImg2 from "/assets/beats headphones.jpg";

const testProducts = [
  {
    name: "iPhone 14 Pro Max",
    slug: "iphone-14-pro-max",
    image: testImg,
    price: 1299.99,
    quantity: 1,
  },
  {
    name: "Beats Headphones",
    slug: "beats-headphones",
    image: testImg2,
    price: 73.45,
    quantity: 3,
  },
  {
    name: "iPhone 14 Pro Max",
    slug: "iphone-14-pro-max",
    image: testImg,
    price: 1299.99,
    quantity: 1,
  },
];

export function CartWidget() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const closeCartWidget = () => {
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <CartTrigger totalAmount={1755.45} totalItems={testProducts.length} />
      </PopoverTrigger>

      <PopoverContent
        align="end"
        alignOffset={-8}
        className="p-5 w-fit min-w-65 flex flex-col"
      >
        {testProducts.length < 1 ? (
          <NoCartItem closeCart={closeCartWidget} />
        ) : (
          <CartItems
            products={testProducts}
            totalAmount={1755.45}
            closeCart={closeCartWidget}
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
