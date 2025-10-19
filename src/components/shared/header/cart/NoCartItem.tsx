import { Fragment } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type NoCartItemProps = {
  closeCart: () => void;
};

export function NoCartItem({ closeCart }: NoCartItemProps) {
  return (
    <Fragment>
      <p className="block w-60 text-center font-secondary">
        You have no item(s) in cart
      </p>

      <p className="block border-b-2 p-2.5 text-center mb-4 font-bold font-secondary">
        Subtotal: $0.00
      </p>

      <div className="w-full">
        <Link
          to="/products"
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full rounded-none uppercase"
          )}
          onClick={closeCart}
        >
          Shop now
        </Link>
      </div>
    </Fragment>
  );
}
