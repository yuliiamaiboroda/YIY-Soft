interface IProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function BenefitCard({ title, subtitle, description }: IProps) {
  return (
    <div>
      <h3 className="mb-2 text-18 text-placeholder md:text-20">{title}</h3>
      <p className="mb-6 text-20 font-medium md:text-24">{subtitle}</p>
      <p className="text-18">{description}</p>
    </div>
  );
}
