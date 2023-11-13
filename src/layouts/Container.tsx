interface IProps {
  children: React.ReactNode;
}

export default function Container({ children }: IProps) {
  return <div className="container mx-auto px-4 md:px-6 lg:px-16 xl:px[100px]">{children}</div>;
}
