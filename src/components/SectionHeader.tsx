interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }
  
  export default function SectionHeader({ children, ...rest }: IProps) {
    return (
      <h2 {...rest} className="mb-10 md:mb-12 lg:mb-[60px] text-20 md:text-28 lg:text-32 text-center text-accent">
        {children}
      </h2>
    );
  }
  