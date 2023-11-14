interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function PortfolioCardDescription({
  children,
  ...rest
}: IProps) {
  return (
    <p
      {...rest}
      className="block max-w-[382px] overflow-hidden rounded border-[1px] border-primary p-5 md:h-[156px] md:max-w-[360px] lg:h-[200px] lg:max-w-[224px] xl:h-[176px] xl:max-w-[296px] text-16"
    >
      {children}
    </p>
  );
}
