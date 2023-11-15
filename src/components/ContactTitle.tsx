interface IProps {
  children: React.ReactNode;
}

export default function ContactTitle({ children }: IProps) {
  return <h3 className="mb-8 text-24 xl:mb-12 xl:text-32">{children}</h3>;
}
