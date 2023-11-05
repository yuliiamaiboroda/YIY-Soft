interface IProps {
  children: React.ReactNode;
}

export default function Container({ children }: IProps) {
  return <div className="container mx-auto px-4">{children}</div>;
}
