interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function ContactLink({ children, ...props }: IProps) {
  return (
    <a {...props} className="text-20">
      {children}
    </a>
  );
}
