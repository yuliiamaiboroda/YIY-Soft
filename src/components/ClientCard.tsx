import Image from 'next/image';

interface IProps {
  name: string;
  review: string;
}

export default function ClientCard({ name, review }: IProps) {
  return (
    <div className="m-1 flex min-h-[528px] flex-col gap-6 rounded border-[1px] border-primary px-6 py-6 sm:min-h-[464px] md:min-h-[472px] md:py-10 lg:min-h-[300px] lg:flex-row xl:min-h-[244px] 2xl:min-h-[236px] ">
      <div className="flex gap-6 lg:flex-col lg:gap-1 lg:text-center">
        <div className="relative h-[100px] w-[100px] sm:h-[120px] sm:w-[120px]">
          <Image
            src="/images/clients/portrait_placeholder.jpg"
            alt="portrait placeholder"
            fill
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <h3 className="text-20 font-medium">{name}</h3>
      </div>
      <p className="text-16 sm:text-18">{review}</p>
    </div>
  );
}
