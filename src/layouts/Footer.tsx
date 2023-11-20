import Link from 'next/link';
import Container from './Container';

interface IProps {
  dictionary: {
    copyright: string;
    designerSign: string;
    designerName: string;
  };
}

export default function Footer({ dictionary }: IProps) {
  const { copyright, designerSign, designerName } = dictionary;

  return (
    <footer className="bg-primary pb-5 pt-10 md:pb-6">
      <Container>
        <div
          className="mb-6 flex flex-col items-center gap-6
                    md:mb-9 md:flex-row md:justify-between"
        >
          <Link
            href="/"
            aria-label="Link to Home"
            className="block h-[40px] w-[86px] md:h-[54px] md:w-[116px]"
          >
            <svg className="h-full w-full">
              <use href="images/icons.svg#logo-lg"></use>
            </svg>
          </Link>
          <div className="flex w-fit gap-1 text-16 text-secondary md:text-18">
            <p>{designerSign}</p>
            <a
              href="https://www.linkedin.com/in/yelizavetatkachenko/"
              target="_blank"
              aria-label="Link to https://www.linkedin.com/in/yelizavetatkachenko/"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {designerName}
            </a>
          </div>
        </div>
        <p className="mx-auto w-fit text-12 text-secondary md:text-16">
          © 2023 {copyright}
        </p>
      </Container>
    </footer>
  );
}
