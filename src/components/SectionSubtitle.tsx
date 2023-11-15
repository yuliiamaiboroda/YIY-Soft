interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function SectionSubTitle({ children, ...rest }: IProps) {
  return (
    <h3
      {...rest}
      className="mb-10 text-center text-24 font-medium text-primary md:mb-12  md:text-32 lg:mb-[60px] lg:text-36"
    >
      {children}
    </h3>
  );
}
