interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function ContactLink({ children, ...props }: IProps) {
  return (
    <a
      {...props}
      className="flex items-center break-all text-20 hover:underline xl:text-24"
    >
      {children}
    </a>
  );
}
