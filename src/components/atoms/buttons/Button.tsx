import { ButtonStyleMapper } from '../../../utils/components/atoms/buttons/Button';
import { ButtonProps } from '../../../type/components/atoms/buttons/Button';

const Button = (props: ButtonProps) => {
  const { className, buttonVariant, ...restProps } = props;

  const buttonClassName = ButtonStyleMapper.get(buttonVariant);

  return (
    <button
      {...restProps}
      className={`${className} ${buttonClassName} transition-colors`}
    />
  );
};

export default Button;
