interface IProps {
  children: React.ReactNode;
}

export default function ContactTitle({ children }: IProps) {
  return <h3 className="text-24">{children}</h3>;
}
