import PortfolioCardImage from './PortfolioCardImage';
import PortfolioCardTitle from './PortfolioCardTitle';
import PortfolioCardDescription from '@/components/PortfolioCardDescription';

interface IProps {
  changeFlexDirection?: boolean;
  imageUrl: string;
  data: {
    title: string;
    firstDescription: string;
    secondDescription: string;
    url: string;
  };
}

export default function PortfolioCard({
  changeFlexDirection = false,
  imageUrl,
  data,
}: IProps) {
  const { title, firstDescription, secondDescription, url } = data;
  return (
    <div>
      <div
        className={`flex-col items-center md:flex md:flex-row md:items-start md:gap-6 xl:gap-[124px] ${
          changeFlexDirection && 'md:flex-row-reverse'
        }`}
      >
        <PortfolioCardImage url={url} imageUrl={imageUrl} />
        <div className="flex flex-col-reverse gap-10 max-md:max-w-[382px] md:block lg:w-full ">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-5">
            <PortfolioCardDescription>
              {firstDescription}
            </PortfolioCardDescription>
            <PortfolioCardDescription>
              {secondDescription}
            </PortfolioCardDescription>
          </div>
          <PortfolioCardTitle url={url}>{title}</PortfolioCardTitle>
        </div>
      </div>
      <PortfolioCardTitle url={url} isTabletScreen={true}>
        {title}
      </PortfolioCardTitle>
    </div>
  );
}
