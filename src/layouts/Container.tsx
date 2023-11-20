interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children }: IProps) {
  return (
    <div className="xl:px[100px] container mx-auto px-4 md:px-6 lg:px-16">
      {children}
    </div>
  );
}
