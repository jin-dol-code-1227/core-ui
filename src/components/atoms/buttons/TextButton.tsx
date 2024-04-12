import { TextButtonProps } from '../../../type/components/atoms/buttons';
import RightIcon from '../../../assets/arrow-right.svg';
import DownIcon from '../../../assets/arrow-down.svg';
import { useCallback, useState } from 'react';

const TextButton = (props: TextButtonProps) => {
  const {
    className,
    textButtonVariant = 'right',
    open = false,
    onClick,
    onClickOpen,
    onClickClose,
    children,
    ...restProps
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(open);

  const onClickButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('IS_OPEN => ', isOpen);
      if (isOpen && onClickClose) onClickClose();
      if (!isOpen && onClickOpen) onClickOpen();
      if (onClick) onClick(event);
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

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
          className={`${isOpen && 'rotate-y-180'} button-icon-transition`}
        />
      )}
      {textButtonVariant === 'down' && (
        <img
          src={DownIcon}
          className={`${isOpen && 'rotate-x-180'} button-icon-transition`}
        />
      )}
    </button>
  );
};

export default TextButton;
