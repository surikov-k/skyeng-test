interface DetailsItemProps {
  title: string;
  info: string | number;
}

export function DetailsItem({ title, info }: DetailsItemProps): JSX.Element {
  return (
    <div className="details__item">
      <h3 className="details__title">{title}:</h3>
      <p className="details__text">{info}</p>
    </div>
  );
}
