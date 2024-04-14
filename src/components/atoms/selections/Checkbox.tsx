import useToggle from '../../../hooks/components/atoms/useToggle';
import { SelectionProps } from '../../../type/components/atoms/selections';

const Checkbox = (props: SelectionProps) => {
  const {
    className,
    active,
    selectionVariant,
    children,
    onClick,
    onClickToggle,
    ...restProps
  } = props;

  const [isActive, onClickInput] = useToggle<HTMLInputElement>(active);

  return (
    <div className='inline-flex items-center'>
      <input
        className={`${className} selection`}
        type='checkbox'
        {...restProps}
        checked={isActive}
        onClick={onClickInput}
      />
      {children}
    </div>
  );
};

export default Checkbox;
