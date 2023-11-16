interface IProps {
  count: string;
  title: string;
}

export default function BenefitCount({ count, title }: IProps) {
  return (
    <div className="basis-1/3 text-center md:basis-1/4">
      <p className="text-60 font-bold text-accent lg:text-80">{count}</p>
      <p className="text-20 md:text-24 lg:text-28">{title}</p>
    </div>
  );
}
