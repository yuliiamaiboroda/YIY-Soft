interface IProps {}

export default function Header({}: IProps) {
  return (
    <div>
      <h1>Header</h1>
      <svg>
        <use href="images/icons.svg#burger"></use>
      </svg>
    </div>
  );
}
