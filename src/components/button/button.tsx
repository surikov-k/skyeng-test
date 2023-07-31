interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ text, onClick, disabled = false }: ButtonProps): JSX.Element {
  return (
    <button
      className="button search-form__button"
      onClick={onClick}
      disabled={disabled}
    >{text}
    </button>
  );
}
