type FooterTitleProps = {
  children: string;
};

export default function FooterTitle({ children }: FooterTitleProps) {
  return (
    <h3 className="uppercase relative font-semibold pb-4 mb-4 after:absolute after:content-[''] after:w-7.5 after:h-[3px] after:bg-white/30 after:left-0 after:bottom-0">
      {children}
    </h3>
  );
}
