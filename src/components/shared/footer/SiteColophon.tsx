import {
  VisaIcon,
  PayPalIcon,
  StripeIcon,
  MasterCardIcon,
  CashOnDeliveryIcon,
} from "./PaymentMethodIcons";

export function SiteColophon() {
  return (
    <div className="container pt-5 pb-4">
      <div className="flex justify-center gap-1.5 pb-2.5 [&>svg]:h-7 [&>svg]:rounded-sm [&>svg]:w-12 [&>svg]:p-1.5 [&>svg]:bg-muted [&>svg]:fill-foreground">
        <VisaIcon />
        <PayPalIcon />
        <StripeIcon />
        <MasterCardIcon />
        <CashOnDeliveryIcon />
      </div>

      <p className="text-center text-sm">
        Copyright © <strong>Doppell {new Date().getFullYear()}</strong>
      </p>
    </div>
  );
}
