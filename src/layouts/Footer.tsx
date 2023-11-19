import Link from 'next/link';
import Container from './Container';

interface IProps {}

export default function Footer({}: IProps) {
  return (
    <footer className="bg-primary pb-5 pt-10 md:pb-6">
      <Container>
        <div
          className="mb-6 flex flex-col items-center gap-6
                    md:mb-9 md:flex-row md:justify-between"
        >
          <Link
            href="/"
            className="block h-[40px] w-[86px] md:h-[54px] md:w-[116px]"
          >
            <svg className="h-full w-full">
              <use href="images/icons.svg#logo-lg"></use>
            </svg>
          </Link>
          <div className="flex w-fit gap-1 text-16 text-secondary md:text-18">
            <p>Designed by</p>
            <a
              href="https://www.linkedin.com/in/yelizavetatkachenko/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Yelizaveta Tkachenko
            </a>
          </div>
        </div>
        <p className="mx-auto w-fit text-12 text-secondary md:text-16">
          © 2023 All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
