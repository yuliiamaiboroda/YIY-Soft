interface IProps {
  data?: { count: string; title: string };
}

export default function BenefitCount({ data }: IProps) {
  //   const { count, title,  } = data;

  const count = '02';
  const title = 'Project';

  return (
    <div className="basis-1/3 md:basis-1/4 text-center">
      <p className="text-60 font-bold text-accent lg:text-80">{count}</p>
      <p className="text-20 md:text-24 lg:text-28">{title}</p>
    </div>
  );
}
