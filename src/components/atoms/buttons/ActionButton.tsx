import { ActionButtonProps } from '../../../type/components/atoms/buttons';
import RefreshIcon from '../../../assets/refresh.svg';
import ArrowIcon from '../../../assets/arrow-right.svg';
import useActiveButton from '../../../hooks/components/atoms/buttons';

const ActionButton = (props: ActionButtonProps) => {
  const {
    className,
    actionButtonVariant,
    children,
    active = false,
    onClick,
    ...restProps
  } = props;

  const [isActive, onClickButton] = useActiveButton(active, onClick);

  return (
    <button
      {...restProps}
      className={`${className} secondary-button basic-button rounded-full pl-3`}
      onClick={onClickButton}
    >
      {children}
      {actionButtonVariant === 'arrow' && (
        <img
          src={ArrowIcon}
          className={`${isActive && 'rotate-y-180'} button-icon-transition`}
        />
      )}
      {actionButtonVariant === 'refresh' && (
        <img
          src={RefreshIcon}
          className={`${isActive && 'animate-spin-fast'} button-icon`}
        />
      )}
    </button>
  );
};

export default ActionButton;
