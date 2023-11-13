import PortfolioCardDescription from '@/components/PortfolioCardDescription';
import Image from 'next/image';

interface IProps {
  changeFlexDirection?: boolean;
}

export default function PortfolioCard({ changeFlexDirection = false }: IProps) {
  return (
    <div>
      <div
        className={`flex-col items-center md:flex md:flex-row md:items-start md:gap-6 lg:gap-10 xl:gap-[124px] ${
          changeFlexDirection && 'md:flex-row-reverse'
        }`}
      >
        {/* IMAGE */}
        <div className="relative h-full max-w-[382px] shrink-0 md:w-[336px] lg:w-[400px]">
          <Image
            src="/images/portfolio/laptop.jpg"
            alt="project image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="flex flex-col-reverse gap-10 max-md:max-w-[382px] md:block lg:w-full ">
          {/* BLOCK OF DESCRIPTION */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-5">
            <PortfolioCardDescription>
              Lorem ipsum dolor sit amet consectetur. Cursus luctus a at
              facilisis eleifend cras at sapien. Sit.
            </PortfolioCardDescription>
            <PortfolioCardDescription>
              Lorem ipsum dolor sit amet consectetur. Cursus luctus a at
              facilisis eleifend cras at sapien. Sit.
            </PortfolioCardDescription>
          </div>
          {/* BLOCK OF TITLE (mobile and desktop screens*/}
          <div className="relative mt-10 flex h-[162px] items-center border-y-[1px] border-primary md:hidden lg:mt-6 lg:flex  lg:h-[176px] lg:items-center xl:h-[228px]">
            <h3 className="text-28 font-semibold lg:text-40">Project Name</h3>
            <svg className="absolute right-0 top-6 h-10 w-10 fill-accent stroke-accent stroke-[1.5]">
              <use href="images/icons.svg#link-arrow"></use>
            </svg>
          </div>
        </div>
      </div>
      {/* BLOCK OF TITLE (tablet screen) */}
      <div className="relative mt-6 hidden h-[192px] items-center border-y-[1px] border-primary md:flex lg:hidden">
        <h3 className="text-32 font-semibold">Project Name</h3>
        <svg className="absolute right-0 top-6 h-10 w-10 fill-accent stroke-accent stroke-[1.5]">
          <use href="images/icons.svg#link-arrow"></use>
        </svg>
      </div>
    </div>
  );
}
