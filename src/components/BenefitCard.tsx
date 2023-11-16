interface IProps {
  data?: { title: string; subtitle: string; description: string };
}

export default function BenefitCard({ data }: IProps) {
  //   const { title, subtitle, description } = data;

  const title = 'Expert Development';
  const subtitle = 'Crafting Interactive Realities';
  const description =
    'Experience websites that breathe life into your ideas with our expert development team.';
    
  return (
    <div>
      <h3 className="mb-2 text-18 text-placeholder md:text-20">{title}</h3>
      <p className="mb-6 text-20 font-medium md:text-24">{subtitle}</p>
      <p className="text-18">{description}</p>
    </div>
  );
}
