interface IProps {
  iconId: string;
  title: string;
  description: string;
}

export default function FeatureSectionCard({
  iconId,
  title,
  description,
}: IProps) {
  return (
    <li className="flex basis-full flex-col rounded border-2 border-primary bg-primary px-6 py-10 text-secondary md:basis-[calc((100%/2)-12px)] lg:basis-1/4">
      <svg className="mb-10 h-20 w-20">
        <use href={`images/icons.svg#${iconId}`}></use>
      </svg>
      <p className="mb-5 text-24 font-medium">{title}</p>
      <p className="text-18">{description}</p>
    </li>
  );
}
