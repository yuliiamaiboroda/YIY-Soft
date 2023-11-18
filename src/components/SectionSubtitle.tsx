interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function SectionSubtitle({ children, ...rest }: IProps) {
  return (
    <h3
      {...rest}
      className="mx-auto mb-10 text-center text-24 font-medium text-primary md:mb-12  md:max-w-[520px] md:text-32 lg:mb-[60px] lg:max-w-[800px] lg:text-36"
    >
      {children}
    </h3>
  );
}
