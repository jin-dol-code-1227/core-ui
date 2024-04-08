import { ButtonStyleMapper } from '../../../utils/components/atoms/buttons/Button';
import { ButtonProps } from '../../../type/components/atoms/buttons/Button';

const Button = (props: ButtonProps) => {
  const { className, buttonStyle, ...restProps } = props;

  const buttonClassName = ButtonStyleMapper.get(buttonStyle);

  return (
    <button
      {...restProps}
      className={`${className} ${buttonClassName} transition-colors`}
    />
  );
};

export default Button;
