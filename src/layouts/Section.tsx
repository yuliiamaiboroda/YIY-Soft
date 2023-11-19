interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bgColor?: string;
}

export default function Section({
  children,
  bgColor = 'secondary',
  ...rest
}: IProps) {
  return (
    <section
      {...rest}
      className={`bg-${bgColor} py-[50px] md:py-[60px] lg:py-[70px] xl:py-20`}
    >
      {children}
    </section>
  );
}
