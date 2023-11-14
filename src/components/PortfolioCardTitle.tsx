import Link from 'next/link';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isTabletScreen?: boolean;
  url: string;
}

export default function PortfolioCardTitle({
  children,
  isTabletScreen,
  url,
}: IProps) {
  return (
    <div
      className={`${
        isTabletScreen ? 'hidden md:flex lg:hidden' : 'flex md:hidden lg:flex '
      } relative mt-10 h-[162px] items-center border-y-[1px] border-primary md:mt-6 md:h-[192px] lg:mt-6 lg:h-[176px] xl:h-[200px]`}
    >
      <h3 className="font-semibold text-24 sm:text-28 md:text-32 lg:text-40">
        {children}
      </h3>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <svg className="absolute right-0 top-3 h-10 w-10 animate-pulse fill-accent stroke-accent stroke-[1.5] duration-700 ease-in-out hover:skew-y-12 hover:scale-90 xl:top-6">
          <use href="images/icons.svg#link-arrow"></use>
        </svg>
      </Link>
    </div>
  );
}
