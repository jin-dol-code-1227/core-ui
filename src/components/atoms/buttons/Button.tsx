import { ButtonStyleMapper } from '../../../utils/components/atoms/buttons';
import { ButtonProps } from '../../../type/components/atoms/buttons';

const Button = (props: ButtonProps) => {
  const { className, buttonVariant = 'primary', ...restProps } = props;

  const buttonClassName = ButtonStyleMapper.get(buttonVariant);

  return (
    <button
      {...restProps}
      className={`${className} ${buttonClassName} transition-colors rounded flex items-center p-2`}
    />
  );
};

export default Button;
