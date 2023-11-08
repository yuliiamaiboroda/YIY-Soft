interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Section({ children, ...rest }: IProps) {
  return (
    <section {...rest} className="py-8">
      {children}
    </section>
  );
}
