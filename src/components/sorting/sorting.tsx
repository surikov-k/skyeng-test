import { SortingOrder } from '../../types';

interface SortingProps {
  order: SortingOrder;
  onChange: (order: SortingOrder) => void;
}

export function Sorting({ order, onChange }: SortingProps): JSX.Element {
  return (
    <div
      className="sorting"
      onClick={() => {
        if (order === SortingOrder.Desc) {
          onChange(SortingOrder.Asc);
        } else {
          onChange(SortingOrder.Desc);
        }
      }}
    >sort by repos:&nbsp;
      {order === SortingOrder.Asc && <span>{SortingOrder.Asc}</span>}
      {order === SortingOrder.Desc && <span>{SortingOrder.Desc}</span>}
    </div>
  );
}
