interface IProps {}

export default function Logo({}: IProps) {
  return (
    <svg className=" h-[54px] w-[116px]">
      <use href="images/icons.svg#logo-lg"></use>
    </svg>
  );
}
