import { TextButtonProps } from '../../../type/components/atoms/buttons';
import RightIcon from '../../../assets/arrow-right.svg';
import DownIcon from '../../../assets/arrow-down.svg';
import useToggle from '../../../hooks/components/atoms/useToggle';

const TextButton = (props: TextButtonProps) => {
  const {
    className,
    textButtonVariant = 'right',
    active = false,
    onClick,
    onChangeActive,
    children,
    ...restProps
  } = props;

  const [isActive, onClickButton] = useToggle(active, onChangeActive, onClick);

  return (
    <button
      {...restProps}
      className={`${className} text-button`}
      onClick={onClickButton}
    >
      {children}
      {textButtonVariant === 'right' && (
        <img
          src={RightIcon}
          className={`${isActive && 'rotate-y-180'} button-icon-transition`}
        />
      )}
      {textButtonVariant === 'down' && (
        <img
          src={DownIcon}
          className={`${isActive && 'rotate-x-180'} button-icon-transition`}
        />
      )}
    </button>
  );
};

export default TextButton;
