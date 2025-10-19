import { Fragment } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

type Product = {
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
};

type CartItemsProps = {
  products: Product[];
  totalAmount: number;
  closeCart: () => void;
};

export function CartItems({
  products,
  totalAmount,
  closeCart,
}: CartItemsProps) {
  return (
    <Fragment>
      <ul className="max-h-60 overflow-y-auto shadow-xs">
        {products.map((product, index) => (
          <li
            key={product.name + index}
            className="w-full h-20 border-b flex relative"
          >
            <Link
              to={`/products/${product.slug}`}
              className="self-center w-15 shrink-0"
              tabIndex={-1}
              onClick={closeCart}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square"
              />
            </Link>

            <div className="flex flex-col px-3.5 py-2.5 w-50">
              <Link
                to={`/products/${product.slug}`}
                onClick={closeCart}
                className="whitespace-nowrap font-secondary text-link hover:text-primary mb-0.5 truncate"
              >
                {product.name}
              </Link>

              <p className="font-secondary text-sm text-foreground/80">
                {product.quantity} x{" "}
                <strong className="text-accent-foreground/80">
                  ${product.price}
                </strong>
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon-sm"
              className="group border-2 rounded-full mt-4 mr-1 size-6 border-border hover:border-accent-foreground hover:bg-transparent"
            >
              <X className="size-3 stroke-3 stroke-foreground group-hover:stroke-accent-foreground" />
            </Button>
          </li>
        ))}
      </ul>

      <p className="block border-b-2 p-2.5 text-center mb-4 font-bold font-secondary">
        Subtotal: ${totalAmount}
      </p>

      <div className="flex flex-col gap-2">
        <Link
          to="/cart"
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full rounded-none uppercase"
          )}
          onClick={closeCart}
        >
          View cart
        </Link>

        <Link
          to="/checkout"
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "w-full rounded-none uppercase"
          )}
          onClick={closeCart}
        >
          Checkout
        </Link>
      </div>
    </Fragment>
  );
}
