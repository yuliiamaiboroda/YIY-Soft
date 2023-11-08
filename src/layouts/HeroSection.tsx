import ThreeScene from '@/components/ThreeScene';
import Link from 'next/link';
import Container from '@/layouts/Container';
interface IProps {}

export default function HeroSection({}: IProps) {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute -z-10 bg-black">
          <ThreeScene />
        </div>
        <Container>
          <div className="flex h-screen items-center text-secondary">
            <div>
              <h1 className="mb-6 max-w-[360px] text-32 font-medium md:mb-10 md:max-w-[550px] md:text-48 lg:max-w-[610px] lg:text-56">
                Crafting Digital Success from Scratch
              </h1>
              <h2 className="mb-10 max-w-[400px] text-24 md:mb-14 md:max-w-[500px] md:text-28 lg:max-w-[610px] lg:text-32">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Tailored Website Solutions for Every Company's Unique Vision
              </h2>
              <div className="w-fit bg-accent text-20 font-medium md:text-24">
                <Link href="#contacts" className="flex px-9 py-4">
                  Order a website
                  <svg className="ml-2 h-6 w-6 self-center">
                    <use href="images/icons.svg#link-arrow"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
