import useToggle from '../../../hooks/components/atoms/useToggle';
import { SelectionProps } from '../../../type/components/atoms/selections';

const Checkbox = (props: SelectionProps) => {
  const {
    className,
    active,
    abled = true,
    children,
    onClick,
    onChangeActive,
    selectionVariable = 'checkbox',
    ...restProps
  } = props;

  const [isActive, onClickInput] = useToggle(active, onChangeActive, onClick);

  return (
    <label className='flex items-center'>
      <input
        className={`${className} selection`}
        type={selectionVariable}
        {...restProps}
        checked={isActive}
        onClick={onClickInput}
        disabled={!abled}
      />
      {children}
    </label>
  );
};

export default Checkbox;
