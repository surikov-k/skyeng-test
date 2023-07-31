import { useAppSelector } from '../../hooks';
import { Button } from '../button/button';
import { getCurrentPagination } from '../../store/app-data/selectors';

interface PaginatorProps {
  page: number;
  onChange: (page: number) => void;
  disabled?: boolean;
}

export function Pagination({ page, onChange, disabled = false }: PaginatorProps): JSX.Element | null {
  const { total } = useAppSelector(getCurrentPagination);

  return (
    total > 1 ? (
      <ul className="pagination">
        <li className="pagination__item pagination__item--prev">
          <Button
            text="&lt;"
            onClick={() => onChange(Math.max(1, page - 1))}
            disabled={disabled || page === 1}
          />
        </li>
        <li className="pagination__item">
          <span className="pagination__info">
            {page}/{total}
          </span>
        </li>
        <li className="pagination__item pagination__item--next">
          <Button
            text="&gt;"
            onClick={() => onChange(Math.min(total, page + 1))}
            disabled={disabled && page === total}
          />
        </li>
      </ul>
    ) : null
  );
}
