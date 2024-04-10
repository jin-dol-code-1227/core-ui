import { ButtonStyleMapper } from '../../../utils/components/atoms/buttons';
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

  const buttonClassName = ButtonStyleMapper.get(buttonVariant);

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
      className={`${className} ${buttonClassName} transition-colors rounded-full flex items-center p-2 pl-3`}
      onClick={onClickButton}
    >
      {children}
      {actionButtonVariant === 'arrow' && (
        <img
          src={ArrowIcon}
          className={`${
            isActive && 'rotate-y-180'
          } transition-transform duration-500 inline w-5 h-5 ml-2`}
        />
      )}
      {actionButtonVariant === 'refresh' && (
        <img
          src={RefreshIcon}
          className={`${isActive && 'animate-spin-fast'} inline w-5 h-5 ml-2`}
        />
      )}
    </button>
  );
};

export default ActionButton;
