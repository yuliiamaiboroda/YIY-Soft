interface IProps {}

export default function Logo({}: IProps) {
  return (
    <svg className="w-[116px] mr-auto">
      <use href="images/icons.svg#logo-lg"></use>
    </svg>
  );
}
