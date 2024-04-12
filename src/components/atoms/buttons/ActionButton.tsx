import { ActionButtonProps } from '../../../type/components/atoms/buttons';
import RefreshIcon from '../../../assets/refresh.svg';
import ArrowIcon from '../../../assets/arrow-right.svg';
import { useCallback, useState } from 'react';

const ActionButton = (props: ActionButtonProps) => {
  const {
    className,
    buttonVariant = 'secondary',
    actionButtonVariant,
    children,
    active = false,
    onClick,
    ...restProps
  } = props;

  const [isActive, setIsActive] = useState<Boolean>(active);

  const onClickButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClick) onClick(event);
      setIsActive((prev) => !prev);
    },
    []
  );

  return (
    <button
      {...restProps}
      className={`${className} ${buttonVariant}-button basic-button rounded-full pl-3`}
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
