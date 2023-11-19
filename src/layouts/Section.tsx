interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Section({ children, ...rest }: IProps) {
  return (
    <section {...rest} className="py-[50px] md:py-[60px] lg:py-[70px] xl:py-20">
      {children}
    </section>
  );
}
