interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, ...props }: IProps) {
  return (
    <div {...props} className="container mx-auto px-4">
      {children}
    </div>
  );
}
