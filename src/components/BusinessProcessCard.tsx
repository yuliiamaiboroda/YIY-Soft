interface IProps {
  data: {
    number: string;
    title: string;
    description: string;
  };
}

export default function BusinessProcessCard({ data }: IProps) {
  const { number, title, description } = data;
  return (
    <div className="mx-1 my-2 flex min-h-[252px] gap-8 rounded border-2 border-primary px-6 py-10 md:mx-2 md:my-0 md:min-h-[280px] lg:min-h-[440px] lg:px-7 xl:min-h-[320px] 2xl:min-h-[232px]">
      <p className="block text-40 text-accent">{number}</p>
      <div>
        <p className="mb-6 text-20 font-medium lg:text-24">{title}</p>
        <p className="text-16 md:text-18 lg:text-20">{description}</p>
      </div>
    </div>
  );
}
