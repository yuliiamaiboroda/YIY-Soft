interface IProps {
  title?: string;
}

export default function BusinessProcessCard({ title }: IProps) {
  return (
    <div className="m-2 flex gap-8 rounded border-2 border-primary px-7 py-10">
      <p className="block text-40 text-accent">01</p>
      <div>
        <p className="text-medium mb-6 text-24">Visualizing Your Goals</p>
        <p>
          Imagine what you want your website to achieve and share your ideas
          with us.
        </p>
      </div>
    </div>
  );
}
