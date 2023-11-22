import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  imageUrl: string;
  url: string;
}

export default function PortfolioCardImage({ imageUrl, url }: IProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to ${url}`}
      className="relative block h-full max-w-[382px] shrink-0 overflow-hidden rounded border-[1px] border-gray-200 grayscale duration-700 ease-in-out hover:cursor-pointer hover:grayscale-0 md:max-w-[336px] lg:max-w-[400px]"
    >
      <Image
        src={imageUrl}
        alt="project image"
        width={0}
        height={0}
        sizes="(min-width: 1024px) 400px,  (min-width: 768px) 336px,  382px"
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
      />
    </Link>
  );
}
