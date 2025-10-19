import React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type CartTriggerProps = {
  totalAmount: number;
  totalItems: number;
};

export const CartTrigger = React.forwardRef<
  HTMLAnchorElement,
  CartTriggerProps
>(({ totalAmount, totalItems, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      to="/cart"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "group hidden lg:flex items-center py-6 gap-2.5 text-sm font-medium hover:bg-transparent"
      )}
      {...props}
    >
      <div>
        <span>CART / </span>
        <span>${totalAmount}</span>
      </div>

      <div className="text-accent-foreground border-accent-foreground border-2 size-7 relative grid place-items-center group-hover:bg-accent-foreground group-hover:text-white after:absolute after:content-[''] after:bottom-full after:left-1/2 after:-translate-x-1/2 after:h-2 after:w-4 after:border-2 after:border-accent-foreground after:rounded-t-full group-hover:after:h-3 after:duration-300">
        <span
          className={cn(
            "text-sm",
            totalItems >= 10 && totalItems < 100 && "text-xs",
            totalItems >= 100 && "text-[0.6875rem]"
          )}
        >
          {totalItems}
        </span>
      </div>
    </Link>
  );
});

CartTrigger.displayName = "CartTrigger";
