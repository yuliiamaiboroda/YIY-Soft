interface IProps {
  children: React.ReactNode;
}

export default function Section({ children }: IProps) {
  return <section className="py-8">{children}</section>;
}
