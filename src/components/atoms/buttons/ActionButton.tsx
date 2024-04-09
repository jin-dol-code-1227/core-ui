import { ButtonStyleMapper } from '../../../utils/components/atoms/buttons';
import { ActionButtonProps } from '../../../type/components/atoms/buttons';
import RefreshIcon from '../../../assets/refresh.svg';
import ArrowIcon from '../../../assets/arrow.svg';

const ActionButton = (props: ActionButtonProps) => {
  const {
    className,
    buttonVariant,
    actionButtonVariant,
    children,
    ...restProps
  } = props;

  const buttonClassName = ButtonStyleMapper.get(buttonVariant);

  return (
    <button
      {...restProps}
      className={`${className} ${buttonClassName} transition-colors rounded-full flex items-center`}
    >
      {actionButtonVariant === 'refresh' && (
        <img src={RefreshIcon} className='inline w-5 h-5 mr-2' />
      )}
      {children}
      {actionButtonVariant === 'arrow' && (
        <img src={ArrowIcon} className='inline w-5 h-5 ml-2' />
      )}
    </button>
  );
};

export default ActionButton;
